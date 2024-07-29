export default function AnswerItem() {
  return (
    <div className="flex flex-col border rounded-md p-3 gap-2">
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-full bg-gray_500">img</div>
        <p className="text-base">작성자</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-full">{/* <Image src="" alt="답변 이미지" height={200} /> */}</div>
        <p>여기한번 가보세요!</p>
      </div>
    </div>
  );
}
