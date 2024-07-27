export default function PromiseRequestForm() {
  return (
    <div className="fixed bottom-0 w-full h-20 bg-[#1B1B1B] z-50 flex justify-end gap-8 items-center px-8 py-0">
      <div className="flex flex-col items-center justify-center">
        <p className="text-xs text-white">2024.07.19 - 2024.07.19</p>
        <p className="text-xs text-white">16:00 - 18:00</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="text-xs text-white">현재 인원</p>
        <p className="text-xs text-white">0/1</p>
      </div>

      {/* form 추가 */}
      <button
        type="button"
        // onClick={}
        className="px-4 py-2 text-xs font-bold border border-none rounded-md bg-primary"
      >
        약속잡기
      </button>
    </div>
  );
}
