import habitReducer, {
  addHabit,
  removeHabit,
  fetchHabitsAsync,
} from '../../app/store/slices/habitSlice';
import { configureStore } from '@reduxjs/toolkit';
import { fetchHabits } from '../../services/api';

jest.mock('../../services/api');

describe('habitSlice reducer', () => {
  const initialState = {
    habits: [],
    loading: false,
    error: null,
  };

  test('should return the initial state', () => {
    expect(habitReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  test('should handle addHabit', () => {
    const newHabit = {
      id: 1,
      name: 'Jia',
      habitName: 'Meditation',
      habitDuration: '30 mins',
    };

    const action = addHabit(newHabit);
    const newState = habitReducer(initialState, action);

    expect(newState.habits).toHaveLength(1);
    expect(newState.habits[0]).toEqual(newHabit);
  });

  test('should handle removeHabit', () => {
    const currentState = {
      habits: [
        {
          id: 1,
          name: 'Monique',
          habitName: 'Meditation',
          habitDuration: '30 mins',
        },
      ],
      loading: false,
      error: null,
    };

    const action = removeHabit(1);
    const newState = habitReducer(currentState, action);

    expect(newState.habits).toHaveLength(0);
  });
});

describe('fetchHabitsAsync thunk', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        habits: habitReducer,
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should handle fulfilled state when habits are fetched successfully', async () => {
    const mockHabits = [
      {
        id: 1,
        name: 'User 1',
        habitName: 'Meditation',
        habitDuration: '30 minutes',
      },
      {
        id: 2,
        name: 'User 2',
        habitName: 'Exercise',
        habitDuration: '45 minutes',
      },
    ];

    fetchHabits.mockResolvedValue(mockHabits);

    await store.dispatch(fetchHabitsAsync());

    const state = store.getState().habits;
    expect(state.loading).toBe(false);
    expect(state.habits).toEqual(mockHabits);
    expect(state.habits).toHaveLength(2);
    expect(state.error).toBe(null);
  });
});

