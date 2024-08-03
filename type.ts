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

// User
export type User = Pick<DbUser, 'id' | 'nickname' | 'email' | 'image' | 'createdAt' | 'tags'>;

// ActivityRequest
export type RequestWithActivity = ActivityRequest & { activity: Activity };
export type RequestWithReqUser = ActivityRequest & { requestUser: User };

// Activity
export type ActivityWithFavoCount = Activity & { _count: { favorites: number } };
export type ActivityWithUserAndFavoCount = Activity & { user: User; _count: { favorites: number } };
export type ActivityWithUser = Activity & { user: User };
export type ActivityWithUserAndFavorite = ActivityWithFavoCount & {
  isFavorite: boolean;
};
export type ActivityWithFavoriteAndCount = Activity & {
  isFavorite: boolean;
} & {
  _count: { favorites: number };
};

// Answer
export type AnswerWithUser = Answer & { user: User };

// Favorite
export type FavoriteWithActivity = Favorite & { activity: Activity };

// Question
export type QuestionWithUserAndAnswers = Question & {
  user: User;
  answers: (Answer & { user: User })[];
  _count: {
    answers: number;
  };
  answerCursorId: string | null;
};
