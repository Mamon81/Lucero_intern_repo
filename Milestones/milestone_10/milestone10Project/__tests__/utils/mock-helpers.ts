import { fetchHabits } from '@/services/api';

export const mockFetchHabitsSuccess = (data: any) => {
  (fetchHabits as jest.Mock).mockResolvedValue(data);
};

export const mockFetchHabitsFailure = () => {
  (fetchHabits as jest.Mock).mockRejectedValue(new Error('API Error'));
};
