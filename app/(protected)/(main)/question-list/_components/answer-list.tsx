import AnswerItem from '@/app/(protected)/(main)/question-list/_components/answer-item';
import { getCurrentUserId } from '@/app/data/user';
import { AnswerWithUser } from '@/type';

interface Props {
  answerList: AnswerWithUser[];
  totalCount: number;
}

export default async function AnswerList({ answerList, totalCount }: Props) {
  const userId = await getCurrentUserId();

  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="flex items-center gap-3">
        <p className="text-lg font-semibold">받은 답변 {totalCount}</p>
      </div>
      <ul className="flex flex-col overflow-y-scroll h-96 gap-2">
        {answerList.map((answer) => (
          <li key={answer.id}>
            <AnswerItem answer={answer} userId={userId} />
          </li>
        ))}
      </ul>
    </div>
  );
}
