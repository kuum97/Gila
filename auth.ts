import NextAuth, { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { verifyPassword } from './lib/utils'
import { LoginSchema } from './schema'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { db } from './lib/db'

export const authConfig = {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const validate = LoginSchema.safeParse(credentials)
          if (validate.success) {
            const { email, password } = validate.data

            const user = await db.user.findUnique({
              where: {
                email: email,
              },
            })
            if (!user) return null

            const passwordsMatch = verifyPassword(password, user.password)

            if (passwordsMatch) return user
          }
          return null
        } catch (error) {
          return null
        }
      },
    }),
  ],
} satisfies NextAuthConfig

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig,
})
