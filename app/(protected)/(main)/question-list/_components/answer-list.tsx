import AnswerItem from './answer-item';

export default function AnswerList() {
  const mockAnswer = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="flex items-center gap-3">
        <p className="text-lg font-semibold">받은 답변 {mockAnswer.length}</p>
      </div>
      <ul className="flex flex-col overflow-y-scroll h-96 gap-2">
        {mockAnswer.map((item) => (
          <li key={item}>
            <AnswerItem />
          </li>
        ))}
      </ul>
    </div>
  );
}
