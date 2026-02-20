import { useNavigate } from 'react-router-dom';
import HelloWorld from './HelloWorld';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-orange-300 text-white gap-8">
      <HelloWorld name="Focus Bear" />
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
      </div>
    </div>
  );
}

export default Home;
