/** @jest-environment jsdom */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import APITest from './APITest';
import { fetchHabits } from '../../services/api';

jest.mock('../../services/api');

describe('APITest Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders habits successfully after loading', async () => {
    const mockData = [
      {
        id: 1,
        name: 'Morning Routine',
        habitName: 'Meditation',
        habitDuration: '30 mins',
      },
    ];

    fetchHabits.mockResolvedValueOnce(mockData);

    render(<APITest />);

    expect(screen.getByText(/Loading habits.../i)).toBeTruthy();

    await waitFor(() => {
      expect(screen.getByText(/Successfully loaded 1 habits/i)).toBeTruthy();
      expect(screen.getByText(/Morning Routine/i)).toBeTruthy();
      expect(screen.getByText(/Meditation/i)).toBeTruthy();
      expect(screen.getByText(/30 mins/i)).toBeTruthy();
    });

    expect(fetchHabits).toHaveBeenCalledTimes(1);
  });

  test('renders error message on API failure', async () => {
    fetchHabits.mockRejectedValueOnce(new Error('Network Error'));

    render(<APITest />);

    await waitFor(() => {
      expect(screen.getByText(/Error: Network Error/i)).toBeTruthy();
    });
  });
});
