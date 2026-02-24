import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from '../slices/counterSlice';
import { getCounterMessage } from '../constants/counterMessages';

const UseEffectDemo = () => {
  const [dogData, setDogData] = useState(null);
  const count = useSelector(selectCount);

  useEffect(() => {
    console.log('Component has mounted!');

    return () => {
      console.log('Cleaning Up Effect: Component is unmounting');
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://dogapi.dog/api/v2/breeds');
      const result = await response.json();

      setDogData(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="flex flex-col items-center p-8 gap-6 font-mono min-h-screen">
      <h1 className="text-3xl font-bold text-neutral-800">
        Dog Breed Explorer
      </h1>
      <div className="text-lg font-medium text-neutral-700">
        Counter: {count}
      </div>
      {getCounterMessage(count) && (
        <div className="text-lg font-medium text-neutral-700">
          {getCounterMessage(count)}
        </div>
      )}
      <button
        type="button"
        onClick={fetchData}
        className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-all shadow-sm active:scale-95"
      >
        Fetch Dog Breeds
      </button>

      <div className="w-full max-w-md h-96 overflow-y-auto border-2 border-orange-300 rounded-md p-2">
        {dogData && dogData.length > 0 ? (
          <ul className="space-y-2">
            {dogData.map((breed) => (
              <li
                key={breed.id}
                className="p-3 bg-neutral-100 border-l-4 border-orange-500 text-neutral-800 shadow-sm rounded-r-md animate-fadeIn"
              >
                <span className="font-bold">{breed.attributes.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-zinc-500 italic text-center border-2 border-dashed border-zinc-300 p-4 rounded-md">
              No breeds loaded. <br /> Click the button above to fetch data.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UseEffectDemo;
