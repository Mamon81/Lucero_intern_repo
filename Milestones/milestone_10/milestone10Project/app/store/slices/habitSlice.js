import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchHabits } from '../../../services/api';

export const fetchHabitsAsync = createAsyncThunk(
  'habits/fetchHabitsAsync',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchHabits();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch habits');
    }
  }
);

const initialState = {
  habits: [],
  loading: false,
  error: null,
};

export const habitSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (state, action) => {
      state.habits.push(action.payload);
    },
    removeHabit: (state, action) => {
      state.habits = state.habits.filter(
        (habit) => habit.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHabitsAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.habits = action.payload;
    });
  },
});

export const { addHabit, removeHabit } = habitSlice.actions;

export default habitSlice.reducer;
