import React, { useState } from 'react';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import ItemList from './ItemList';

function App() {
  const [currentPage, setCurrentPage] = useState('counter');

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-orange-300 text-white">
      <HelloWorld name="Focus Bear" />
      {currentPage === 'counter' ? (
        <>
          <Counter />
          <button
            type="button"
            onClick={() => setCurrentPage('itemlist')}
            className="mt-5 rounded-lg border-2 border-zinc-600 bg-neutral-200 px-5 py-2 text-1xl font-medium text-orange-300 transition-all hover:bg-orange-900 hover:text-neutral-200 active:scale-95"
          >
            Go to Item List
          </button>
        </>
      ) : (
        <ItemList onBack={() => setCurrentPage('counter')} />
      )}
    </div>
  );
}

export default App;
