import { z } from 'zod';
import { Activity, ActivityRequest, User as DbUser } from '@prisma/client';
import { LoginSchema, RegisterSchema } from '@/schema';

export type ActionType<T> = {
  success: boolean;
  message: string;
  data?: T;
};

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
export type LoginSchemaType = z.infer<typeof LoginSchema>;
// type User = Omit<DbUser, 'password' | 'emailVerified' | 'accounts' | 'sessions'>;

export type User = Pick<DbUser, 'id' | 'nickname' | 'email' | 'image'>;

export type ActivityRequestWithActivity = ActivityRequest & {
  activity: Activity;
};

export type ActivityRequestWithUser = ActivityRequest & {
  requestUser: User;
};
