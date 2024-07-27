// import Image from 'next/image';

export default function AuthorInfo() {
  return (
    <div className="mt-16">
      <p className="text-sm font-bold">등록한 작성자 정보</p>
      <div className="flex items-center gap-4 p-4 mt-1 mb-32 border border-solid rounded-lg bor">
        {/* <Image
        src={}
        alt="작성자 프로필 이미지"
        layout="fill"
        className="object-cover w-10 h-10 rounded-full"
      /> */}
        <div className="w-10 h-10 bg-gray-800 rounded-full">0</div>
        <div className="flex flex-col justify-between">
          <p className="text-sm">닉네임</p>
          <p className="text-sm">2m</p>
        </div>
      </div>
    </div>
  );
}
