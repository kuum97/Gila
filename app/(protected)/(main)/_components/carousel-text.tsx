interface Props {
  title: string;
}

export default function CarouselText({ title }: Props) {
  return (
    <div className="absolute bottom-0 flex flex-col justify-end w-full h-full p-3 text-white border-0 rounded-lg shadow-inner bg-gradient-to-t from-black via-transparent to-transparent">
      <div className="absolute left-3 bottom-7">
        <p className="text-xl font-bold">
          <span className="text-2xl">길라</span> TOP5
        </p>
        <p className="text-sm">{title}</p>
      </div>
    </div>
  );
}
