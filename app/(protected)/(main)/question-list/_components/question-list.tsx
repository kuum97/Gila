import QuestionListCard from './question-list-card';

export default function QuestionList() {
  const mockList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <ul>
        {mockList.map((item) => (
          <li key={item}>
            <QuestionListCard />
          </li>
        ))}
      </ul>
    </div>
  );
}
