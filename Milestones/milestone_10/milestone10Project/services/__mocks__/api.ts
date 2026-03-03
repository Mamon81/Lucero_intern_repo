import { mockHabitsData } from '@/__tests__/fixtures/habits';

export const fetchHabits = jest.fn(() => Promise.resolve(mockHabitsData));
