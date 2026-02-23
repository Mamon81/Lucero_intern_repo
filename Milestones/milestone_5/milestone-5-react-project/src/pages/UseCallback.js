import React, { useState, useCallback } from 'react';

// Child component that receives a callback prop
const UpdateCounter = React.memo(({ onClick, label }) => {
  console.log('Rendering UpdateCounter');

  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-6 rounded-lg border-2 border-zinc-600 bg-orange-500 px-6 py-3 text-lg font-medium text-white transition-all hover:bg-orange-600 active:scale-95"
    >
      {label}
    </button>
  );
});

UpdateCounter.displayName = 'UpdateCounter';

// Parent component
const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="p-8 font-mono">
      <h1 className="text-3xl font-bold text-neutral-800">
        useCallback Performance Demo
      </h1>
      <p className="mt-4 text-lg text-neutral-700">
        Count: <span className="font-bold text-orange-600">{count}</span>
      </p>

      <UpdateCounter onClick={increment} label="Increment Count" />

      <button
        type="button"
        onClick={() => setOtherState((prev) => !prev)}
        className="mt-4 ml-4 rounded-lg border-2 border-zinc-600 bg-neutral-200 px-6 py-3 text-lg font-medium text-orange-300 transition-all hover:bg-orange-900 hover:text-neutral-200 active:scale-95"
      >
        Toggle Other State
      </button>

      <p className="mt-2 text-sm text-neutral-500">
        Other State:
        {otherState ? ' ON' : ' OFF'}
      </p>
    </div>
  );
};

export default UseCallback;
