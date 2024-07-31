'use server';

import { db } from '@/lib/db';
import { QuestionWithUserAndAnswerAndCount } from '@/type';

// eslint-disable-next-line import/prefer-default-export
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
}): Promise<{
  questions: (QuestionWithUserAndAnswerAndCount & { answerCursorId: string | null })[];
  cursorId: string | null;
}> => {
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

export const getQuestionById = async (
  questionId: string,
): Promise<QuestionWithUserAndAnswerAndCount> => {
  try {
    const question = await db.question.findUnique({
      where: {
        id: questionId,
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
    });
    if (!question) throw new Error('해당 질문이 존재하지 않습니다.');

    return question;
  } catch (error) {
    throw new Error('질문을 가져오는중에 에러가 발생 하였습니다.');
  }
};
