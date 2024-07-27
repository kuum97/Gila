'use server';

import { db } from '@/lib/db';
import { Question } from '@prisma/client';

// eslint-disable-next-line import/prefer-default-export
export const getQuestions = async ({
  order,
  location,
  take = 10,
  cursor,
}: {
  order: 'answerLen' | 'recent';
  location?: string;
  take?: number;
  cursor?: string | null;
}): Promise<{ questions: Question[]; cursorId: string | null }> => {
  try {
    let questions;
    switch (order) {
      case 'recent':
        questions = await db.question.findMany({
          where: { location },
          include: {
            user: true,
            answers: true,
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
            user: true,
            answers: true,
          },
          take,
          cursor: cursor ? { id: cursor } : undefined,
          skip: cursor ? 1 : 0,
          orderBy: { answers: { _count: 'desc' as const } },
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
