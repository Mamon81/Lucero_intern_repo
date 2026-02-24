import React, { useState } from 'react';
import useTestApiRequest from '../hooks/useTestAPIRequest';

function TestAPIPage() {
  const { makeRequest, loading, error, data } = useTestApiRequest();

  const [formData, setFormData] = useState({
    name: '',
    habitName: '',
    duration: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    makeRequest(formData);
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8 w-full">
      <div className="flex flex-col items-center gap-4 w-full max-w-md">
        <h1 className="text-3xl font-bold text-neutral-800">
          Test API Request
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-lg font-medium text-neutral-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="border-2 bg-white border-zinc-400 p-3 rounded-md text-black focus:outline-none focus:border-orange-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="habitName"
              className="text-lg font-medium text-neutral-700"
            >
              Habit Name
            </label>
            <input
              type="text"
              id="habitName"
              name="habitName"
              value={formData.habitName}
              onChange={handleInputChange}
              placeholder="Enter habit name"
              className="border-2 bg-white border-zinc-400 p-3 rounded-md text-black focus:outline-none focus:border-orange-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="duration"
              className="text-lg font-medium text-neutral-700"
            >
              Duration
            </label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              placeholder="Enter duration"
              className="border-2 bg-white border-zinc-400 p-3 rounded-md text-black focus:outline-none focus:border-orange-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 rounded-lg border-2 border-zinc-600 bg-neutral-200 px-6 py-3 text-lg font-medium text-orange-300 transition-all hover:bg-orange-900 hover:text-neutral-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Send Request'}
          </button>
        </form>

        {loading && (
          <div className="mt-6 text-center">
            <p className="text-lg font-medium text-orange-500">Loading...</p>
          </div>
        )}

        {error && !loading && (
          <div className="mt-6 p-4 rounded-lg bg-red-100 border-2 border-red-500 w-full">
            <p className="text-sm font-medium text-red-700">Error:</p>
            <p className="text-sm text-red-600 mt-2">{error}</p>
          </div>
        )}

        {data && !error && !loading && (
          <div className="mt-6 p-4 rounded-lg bg-green-100 border-2 border-green-500 w-full">
            <p className="text-sm font-bold text-green-700 mb-3">Success!</p>
            <div className="bg-white p-3 rounded-md border border-green-300">
              <pre className="text-xs text-neutral-800 overflow-auto">
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TestAPIPage;
