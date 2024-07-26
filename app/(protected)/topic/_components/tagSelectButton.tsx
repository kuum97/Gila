interface Props {
  tag: string;
  isSelected: string;
  onClick: (tagName: string) => void;
}

export default function TagSelectButton({ tag, isSelected, onClick }: Props) {
  return (
    <div
      className={`flex flex-col items-center justify-center w-40 h-40 rounded-xl ${isSelected === tag ? 'bg-primary' : 'bg-gray_100'} hover:bg-primary`}
      onClick={() => onClick(tag)}
    >
      <p className="text-2xl font-bold">{tag}</p>
    </div>
  );
}
