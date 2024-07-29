interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function SmallButton({ color, name, onClick }: Props) {
  return (
    <button
      type="button"
      className={`text-xs text-white rounded-md ${color} px-2 py-1`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
