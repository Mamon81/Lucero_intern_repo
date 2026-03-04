import React, { useState, useEffect } from 'react';
import { fetchHabits } from '../../services/api';

export default function APITest() {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadHabits = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchHabits();
        setHabits(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch habits');
      } finally {
        setLoading(false);
      }
    };

    loadHabits();
  }, []);

  if (loading) {
    return (
      <div>
        <h2>API Test Component</h2>
        <p>Loading habits...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>API Test Component</h2>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>API Test Component</h2>
      <p>Successfully loaded {habits.length} habits</p>
      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>
            <strong>{habit.name}</strong> - {habit.habitName} (
            {habit.habitDuration})
          </li>
        ))}
      </ul>
    </div>
  );
}
