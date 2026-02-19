import React, { useState } from 'react';

function ItemList({ onBack }) {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    setError('');
  };

  const addItem = () => {
    if (inputText.trim() === '') {
      setError('Please enter text before adding');
    } else {
      setItems([...items, inputText]);
      setInputText('');
      setError('');
    }
  };

  return (
    <div className="flex flex-col items-center p-8 gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type something..."
            className="border-2 bg-white border-zinc-400 p-2 rounded-md text-black"
          />
          <button
            type="button"
            onClick={addItem}
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-all"
          >
            Add Item
          </button>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>

      {/* The List Container */}
      <ul className="w-64 space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="p-2 bg-neutral-100 border-l-4 border-orange-500 text-neutral-800 shadow-sm"
          >
            {item}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onBack}
        className="mt-5 rounded-lg border-2 border-zinc-600 bg-neutral-200 px-5 py-2 text-1xl font-medium text-orange-300 transition-all hover:bg-orange-900 hover:text-neutral-200 active:scale-95"
      >
        Back to Counter
      </button>
    </div>
  );
}

export default ItemList;
