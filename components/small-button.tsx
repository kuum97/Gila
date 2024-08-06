interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function SmallButton({ color, name, onClick }: Props) {
  return (
    <button
      type="button"
      className={`text-base text-white font-medium rounded-md ${color} px-5 py-2`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
