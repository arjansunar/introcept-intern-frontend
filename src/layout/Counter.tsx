import { useState } from "react";
import { CounterButton, Header } from "../component";

const Counter = () => {
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

      <Header />
      <main className="flex flex-col items-center justify-center gap-4 z-10">
        <p className="font-bold text-4xl">Counter </p>
        <p className="space-x-3">
          <CounterButton name="Increment" onClick={increment} />
          <CounterButton name="Reset" onClick={reset} />
          <CounterButton name="Decrement" onClick={decrement} />
        </p>
      </main>
    </div>
  );
};

export default Counter;
