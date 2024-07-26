import z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({ message: '올바른 이메일 형식을 입력해주세요.' }),
  password: z.string().min(8, { message: '패스워드는 최소 8글자 이상입니다.' }),
});

export const RegisterSchema = z
  .object({
    nickname: z.string().min(1).max(10),
    email: z.string().email({ message: '올바른 이메일 형식을 입력해주세요.' }),
    password: z.string().min(8, { message: '패스워드는 최소 8글자 이상입니다.' }),
    confirmPassword: z.string().min(1, { message: '필드를 입력해주세요.' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '패스워드가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });
