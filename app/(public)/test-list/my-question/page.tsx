import MyQuestionCard from './_components/my-question-card';

export default function Page() {
  return (
    <div className="flex flex-col gap-3">
      <div>내가 한 질문</div>
      <div>
        <MyQuestionCard />
      </div>
    </div>
  );
}
