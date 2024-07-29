import QuestionListCard from './question-list-card';

export default function QuestionList() {
  const mockList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="h-[450px] overflow-y-auto">
      <ul className="flex flex-col items-center gap-2">
        {mockList.map((item) => (
          <li key={item}>
            <QuestionListCard />
          </li>
        ))}
      </ul>
    </div>
  );
}
