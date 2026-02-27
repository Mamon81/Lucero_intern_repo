import axios from 'axios';
import axiosRetry, {
  exponentialDelay,
  isNetworkOrIdempotentRequestError,
} from 'axios-retry';
import { Habit } from '../datatypes';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

axiosRetry(axios, {
  retries: 3,
  retryDelay: exponentialDelay,
  retryCondition: (error) => {
    return (
      isNetworkOrIdempotentRequestError(error) ||
      (error.response?.status ? error.response.status >= 500 : false)
    );
  },
});

export const fetchHabits = async (): Promise<Habit[]> => {
  try {
    const response = await axios.get(API_URL);

    const mappedData = response.data.slice(0, 10).map((item: any) => ({
      id: item.id,
      name: `User ${item.userId}`,
      habitName: item.title,
      habitDuration: `${Math.floor(Math.random() * 60) + 15} minutes`,
    }));

    return mappedData;
  } catch (error) {
    console.error('Error fetching habits:', error);
    throw error;
  }
};
