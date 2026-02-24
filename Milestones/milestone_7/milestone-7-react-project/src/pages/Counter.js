import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../slices/counterSlice';
import { getCounterMessage } from '../constants/counterMessages';

function Counter() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="mt-6 text-4xl font-medium text-neutral-200 [-webkit-text-stroke:1px_black]">
        Count: {count}
      </p>
      {getCounterMessage(count) && (
        <p className="text-2xl font-medium text-neutral-200 [-webkit-text-stroke:1px_black]">
          {getCounterMessage(count)}
        </p>
      )}
      <div className="flex gap-4 mt-4">
        <button
          type="button"
          onClick={() => dispatch(decrement())}
          className="rounded-lg border-2 border-zinc-600 bg-neutral-200 px-8 py-4 text-2xl font-medium text-orange-300 transition-all hover:bg-orange-900 hover:text-neutral-200 active:scale-95"
        >
          Decrement Count
        </button>
        <button
          type="button"
          onClick={() => dispatch(increment())}
          className="rounded-lg border-2 border-zinc-600 bg-neutral-200 px-8 py-4 text-2xl font-medium text-orange-300 transition-all hover:bg-orange-900 hover:text-neutral-200 active:scale-95"
        >
          Increment Count
        </button>
      </div>
    </div>
  );
}

export default Counter;
