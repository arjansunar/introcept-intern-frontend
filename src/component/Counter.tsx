import { FC } from "react";

interface CounterButtonProps {
  name: string;
  onClick: () => void;
}
const CounterButton: FC<CounterButtonProps> = ({ name, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-2 my-4 rounded-lg bg-indigo-500 text-xl font-medium hover:bg-indigo-600 active:ring-4 ring-0 ring-indigo-500 ring-opacity-20"
      aria-label="Increment button"
    >
      {name}
    </button>
  );
};

export default CounterButton;
