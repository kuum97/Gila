'use client';

import {
  CheckCircle,
  Clipboard,
  Heart,
  HelpCircle,
  Star,
  LucideIcon,
  HeartHandshake,
  MessageCircleQuestion,
  LayoutDashboard,
  UserRoundPen,
  UserRound,
  MessageCircle,
} from 'lucide-react';

const dashboardPrefix = '/dashboard';

export interface Route {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const DASHBOARD_ROUTES: Route[] = [
  { icon: LayoutDashboard, label: '등록한 활동', href: `${dashboardPrefix}/my-activity` },
  { icon: Clipboard, label: '신청한 활동', href: `${dashboardPrefix}/promise-list` },
  { icon: CheckCircle, label: '신청 현황', href: `${dashboardPrefix}/promised-list` },
  { icon: Heart, label: '저장한 활동', href: `${dashboardPrefix}/wishlist` },
  { icon: HelpCircle, label: '내 질문', href: `${dashboardPrefix}/my-question` },
  { icon: Star, label: '리뷰', href: `${dashboardPrefix}/reviews` },
  { icon: MessageCircle, label: '채팅', href: `${dashboardPrefix}/my-chat` },
];

export const MAIN_ROUTES: Route[] = [
  { icon: HeartHandshake, label: '길라 찾기', href: '/activity-list' },
  { icon: MessageCircleQuestion, label: '질문 하기', href: '/question-list' },
];

export const PROFILE_ROUTES: Route[] = [
  { icon: UserRound, label: '프로필', href: '/profile' },
  { icon: UserRoundPen, label: '개인정보', href: '/profile/edit' },
];
