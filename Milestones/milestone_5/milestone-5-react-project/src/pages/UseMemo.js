import React, { useState, useMemo } from 'react';

const expensiveCalculation = (num) => {
  console.log('Calculating...');
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

const UseMemoDemo = () => {
  const [count, setCount] = useState(0);
  const [items] = useState([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);

  const memorizedValue = useMemo(() => {
    return expensiveCalculation(items[0]);
  }, [items]);

  return (
    <div className="p-8 font-mono">
      <h1 className="text-3xl font-bold text-neutral-800">
        useMemo Performance Demo
      </h1>
      <p className="mt-4 text-lg text-neutral-700">
        Expensive Result:{' '}
        <span className="font-bold text-orange-600">{memorizedValue}</span>
      </p>

      <button
        onClick={() => setCount(count + 1)}
        className="mt-6 rounded-lg border-2 border-zinc-600 bg-orange-500 px-6 py-3 text-lg font-medium text-white transition-all hover:bg-orange-600 active:scale-95"
      >
        Re-render Count: {count}
      </button>

      <ul className="mt-6 border-t-2 border-orange-300 pt-4 space-y-2">
        {items.map((num, index) => (
          <li
            key={index}
            className="p-3 bg-neutral-100 border-l-4 border-orange-500 text-neutral-800 shadow-sm rounded-r-md"
          >
            Number: {num}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemoDemo;
