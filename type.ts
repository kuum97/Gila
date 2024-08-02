import { z } from 'zod';
import {
  Activity,
  ActivityRequest,
  Answer,
  User as DbUser,
  Favorite,
  Question,
} from '@prisma/client';
import { LoginSchema, RegisterSchema } from '@/schema';

export type ActionType<T> = {
  success: boolean;
  message: string;
  data?: T;
};

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
export type LoginSchemaType = z.infer<typeof LoginSchema>;
// type User = Omit<DbUser, 'password' | 'emailVerified' | 'accounts' | 'sessions'>;

export type User = Pick<
  DbUser,
  'id' | 'nickname' | 'email' | 'password' | 'image' | 'createdAt' | 'tags'
>;

export type RequestWithActivity = ActivityRequest & {
  activity: Activity;
};

export type RequestWithActivityAndReqUser = ActivityRequest & {
  activity: Activity;
  requestUser: User;
};

export type ActivityRequestWithUser = ActivityRequest & {
  requestUser: User;
};

export type ActivityWithFavorites = Activity & {
  favorites: Favorite[];
};

export type ActivityWithUser = Activity & { user: User };

export type QuestionWithUserAndCount = Question & { user: User; _count: { answers: number } };

export type AnswerWithUser = Answer & { user: User };
