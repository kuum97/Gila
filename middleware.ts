import { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, authRoutes, publicRoutes } from '@/routes';
import { auth } from './auth';

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isMainPage = nextUrl.pathname === '/';

  if (isApiAuthRoute) {
    return;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
      return;
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    Response.redirect(new URL('/sign-in', nextUrl));
    return;
  }

  if (isLoggedIn && isMainPage) {
    Response.redirect(new URL('/activity-list', nextUrl));
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
