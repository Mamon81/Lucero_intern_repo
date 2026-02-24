import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../slices/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="mt-6 text-4xl font-medium text-neutral-200 [-webkit-text-stroke:1px_black]">
        Count: {count}
      </p>

      <button
        type="button"
        onClick={() => dispatch(increment())}
        className="mt-2 rounded-lg border-2 border-zinc-600 bg-neutral-200 px-8 py-4 text-2xl font-medium text-orange-300 transition-all hover:bg-orange-900 hover:text-neutral-200 active:scale-95"
      >
        Increment Count
      </button>
    </div>
  );
}

export default Counter;
