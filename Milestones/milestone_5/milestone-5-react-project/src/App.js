import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Counter from './pages/Counter';
import ItemList from './pages/ItemList';

function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/counter"
        element={
          <div className="flex h-screen flex-col items-center justify-center bg-orange-300 text-white">
            <Counter />
            <button
              type="button"
              onClick={() => navigate('/')}
              className="mt-5 rounded-lg border-2 border-zinc-600 bg-neutral-200 px-5 py-2 text-lg font-medium text-orange-300 transition-all hover:bg-orange-900 hover:text-neutral-200 active:scale-95"
            >
              Back to Home
            </button>
          </div>
        }
      />
      <Route
        path="/itemlist"
        element={
          <div className="flex h-screen flex-col items-center justify-center bg-orange-300 text-white">
            <ItemList />
            <button
              type="button"
              onClick={() => navigate('/')}
              className="mt-5 rounded-lg border-2 border-zinc-600 bg-neutral-200 px-5 py-2 text-lg font-medium text-orange-300 transition-all hover:bg-orange-900 hover:text-neutral-200 active:scale-95"
            >
              Back to Home
            </button>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
