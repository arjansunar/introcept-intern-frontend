import { useState } from "react";
import ViteLogo from "./vite-logo.svg";
import ReactLogo from "./react-logo.svg";
import TailwindcssLogo from "./tailwindcss-logo.svg";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-800 text-white">
      <div className="fixed inset-0 flex items-center justify-center bg-blend-darken">
        <p className="text-[48rem] font-black text-gray-700 text-opacity-40">
          {count}
        </p>
      </div>
      <header className="flex flex-col items-center absolute top-24">
        <h2 className="italic text-5xl uppercase">The Stack</h2>
        <div className="flex space-x-3 mt-2">
          <img className="h-20 " src={ReactLogo} alt="" />
          <img className="h-20 " src={TailwindcssLogo} alt="" />
          <img className="h-20 " src={ViteLogo} alt="" />
        </div>
      </header>
      <main className="flex flex-col items-center justify-center gap-4 z-10">
        <p className="font-bold text-4xl">Counter </p>
        <p className="space-x-3">
          <button
            type="button"
            onClick={increment}
            className="px-4 py-2 my-4 rounded-lg bg-indigo-500 text-xl font-medium hover:bg-indigo-600 active:ring-4 ring-0 ring-indigo-500 ring-opacity-20"
            aria-label="Increment button"
          >
            Increment
          </button>
          <button
            type="button"
            onClick={reset}
            className="px-4 py-2 my-4 rounded-lg bg-indigo-500 text-xl font-medium hover:bg-indigo-600 active:ring-4 ring-0 ring-indigo-500 ring-opacity-20"
            aria-label="Reset button"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={decrement}
            aria-label="Decrement button"
            className="px-4 py-2 my-4 rounded-lg bg-indigo-500 text-xl font-medium hover:bg-indigo-600 active:ring-4 ring-0 ring-indigo-500 ring-opacity-20"
          >
            Decrement
          </button>
        </p>
      </main>
    </div>
  );
}

export default App;
