import React from 'react';
import HelloWorld from './HelloWorld';
import Counter from './Counter';

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-orange-300 text-white">
      <HelloWorld name="Focus Bear" />
      <Counter />
    </div>
  );
}

export default App;
