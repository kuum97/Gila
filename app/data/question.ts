'use server';

import db from '@/lib/db';
import { QuestionWithUserAndAnswers } from '@/type';
import { getCurrentUserId } from './user';

export const getQuestions = async ({
  order = 'recent',
  location,
  take = 10,
  answerTake = 10,
  cursor,
}: {
  order?: 'answerLen' | 'recent';
  location?: string;
  take?: number;
  answerTake?: number;
  cursor?: string | null;
}): Promise<{ questions: QuestionWithUserAndAnswers[]; cursorId: string | null }> => {
  try {
    let questions;
    switch (order) {
      case 'recent':
        questions = await db.question.findMany({
          where: { location },
          include: {
            answers: {
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
              },
              take: answerTake,
              orderBy: {
                createdAt: 'desc',
              },
            },
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
            answers: {
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
              },
              take: answerTake,
              orderBy: {
                createdAt: 'desc',
              },
            },
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
          orderBy: [
            { answers: { _count: 'desc' } },
            {
              createdAt: 'desc',
            },
          ],
        });
        break;
      default:
        throw new Error('order값이 잘못 되었습니다');
    }

    const lastQuestion = questions[questions.length - 1];
    const newCursorId = lastQuestion ? lastQuestion.id : null;

    const questionsWithAnswerCursorId = questions.map((question) => {
      const lastAnswer = question.answers[question.answers.length - 1];
      return {
        ...question,
        answerCursorId: lastAnswer ? lastAnswer.id : null,
      };
    });

    return { questions: questionsWithAnswerCursorId, cursorId: newCursorId };
  } catch (error) {
    throw new Error('질문 요청을 가져오는 중에 에러가 발생하였습니다.');
  }
};

export const getMyQuestions = async ({
  take = 10,
  answerTake = 10,
  cursor,
}: {
  take?: number;
  answerTake?: number;
  cursor?: string;
}): Promise<{ questions: QuestionWithUserAndAnswers[]; cursorId: string | null }> => {
  const userId = await getCurrentUserId();

  const questions = await db.question.findMany({
    where: {
      userId,
    },
    include: {
      answers: {
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
        },
        take: answerTake,
        orderBy: {
          createdAt: 'desc',
        },
      },
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

  const lastQuestion = questions[questions.length - 1];
  const newCursorId = lastQuestion ? lastQuestion.id : null;

  const questionsWithAnswerCursorId = questions.map((question) => {
    const lastAnswer = question.answers[question.answers.length - 1];
    return {
      ...question,
      answerCursorId: lastAnswer ? lastAnswer.id : null,
    };
  });

  return { questions: questionsWithAnswerCursorId, cursorId: newCursorId };
};
