import { useNavigate } from 'react-router-dom';
import HelloWorld from './HelloWorld';
import { useSelector } from 'react-redux';
import { selectCount } from '../slices/counterSlice';
import { getCounterMessage } from '../constants/counterMessages';

function Home() {
  const navigate = useNavigate();
  const count = useSelector(selectCount);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-orange-300 text-white gap-8">
      <HelloWorld name="Focus Bear" />
      <div className="text-4xl font-medium text-neutral-200 [-webkit-text-stroke:1px_black]">
        Counter: {count}
      </div>
      {getCounterMessage(count) && (
        <div className="text-2xl font-bold text-neutral-200 [-webkit-text-stroke:1px_black]">
          {getCounterMessage(count)}
        </div>
      )}
      <div className="flex gap-4 flex-wrap justify-center">
        <button
          type="button"
          onClick={() => navigate('/counter')}
          className="rounded-lg border-2 border-zinc-600 bg-neutral-200 px-5 py-2 text-lg font-medium text-orange-300 transition-all hover:bg-orange-900 hover:text-neutral-200 active:scale-95"
        >
          Counter
        </button>
        <button
          type="button"
          onClick={() => navigate('/itemlist')}
          className="rounded-lg border-2 border-zinc-600 bg-neutral-200 px-5 py-2 text-lg font-medium text-orange-300 transition-all hover:bg-orange-900 hover:text-neutral-200 active:scale-95"
        >
          Item List
        </button>
        <button
          type="button"
          onClick={() => navigate('/profile')}
          className="rounded-lg border-2 border-zinc-600 bg-neutral-200 px-5 py-2 text-lg font-medium text-orange-300 transition-all hover:bg-orange-900 hover:text-neutral-200 active:scale-95"
        >
          Profile
        </button>
        <button
          type="button"
          onClick={() => navigate('/useeffect')}
          className="rounded-lg border-2 border-zinc-600 bg-neutral-200 px-5 py-2 text-lg font-medium text-orange-300 transition-all hover:bg-orange-900 hover:text-neutral-200 active:scale-95"
        >
          Use Effect Demo
        </button>
        <button
          type="button"
          onClick={() => navigate('/usememo')}
          className="rounded-lg border-2 border-zinc-600 bg-neutral-200 px-5 py-2 text-lg font-medium text-orange-300 transition-all hover:bg-orange-900 hover:text-neutral-200 active:scale-95"
        >
          Use Memo Demo
        </button>
        <button
          type="button"
          onClick={() => navigate('/usecallback')}
          className="rounded-lg border-2 border-zinc-600 bg-neutral-200 px-5 py-2 text-lg font-medium text-orange-300 transition-all hover:bg-orange-900 hover:text-neutral-200 active:scale-95"
        >
          Use Callback Demo
        </button>
        <button
          type="button"
          onClick={() => navigate('/testapi')}
          className="rounded-lg border-2 border-zinc-600 bg-neutral-200 px-5 py-2 text-lg font-medium text-orange-300 transition-all hover:bg-orange-900 hover:text-neutral-200 active:scale-95"
        >
          Test API Demo
        </button>
      </div>
    </div>
  );
}

export default Home;
