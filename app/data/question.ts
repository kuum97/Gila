'use server';

import { db } from '@/lib/db';
import { QuestionWithUser } from '@/type';

// eslint-disable-next-line import/prefer-default-export
export const getQuestions = async ({
  order = 'recent',
  location,
  take = 10,
  cursor,
}: {
  order?: 'answerLen' | 'recent';
  location?: string;
  take?: number;
  cursor?: string | null;
}): Promise<{ questions: QuestionWithUser[]; cursorId: string | null }> => {
  try {
    let questions;
    switch (order) {
      case 'recent':
        questions = await db.question.findMany({
          where: { location },
          include: {
            user: {
              select: {
                id: true,
                nickname: true,
                email: true,
                image: true,
                tags: true,
                createdAt: true,
              },
            },
            _count: {
              select: {
                answers: true,
              },
            },
          },
          take,
          cursor: cursor ? { id: cursor } : undefined,
          skip: cursor ? 1 : 0,
          orderBy: { createdAt: 'desc' },
        });
        break;
      case 'answerLen':
        questions = await db.question.findMany({
          where: { location },
          include: {
            user: {
              select: {
                id: true,
                nickname: true,
                email: true,
                image: true,
                tags: true,
                createdAt: true,
              },
            },
            _count: {
              select: {
                answers: true,
              },
            },
          },
          take,
          cursor: cursor ? { id: cursor } : undefined,
          skip: cursor ? 1 : 0,
          orderBy: { answers: { _count: 'desc' } },
        });
        break;
      default:
        throw new Error('order값이 잘못 되었습니다');
    }

    const lastQuestion = questions[questions.length - 1];
    const newCursorId = lastQuestion ? lastQuestion.id : null;

    return { questions, cursorId: newCursorId };
  } catch (error) {
    throw new Error('질문 요청을 가져오는 중에 에러가 발생하였습니다.');
  }
};
