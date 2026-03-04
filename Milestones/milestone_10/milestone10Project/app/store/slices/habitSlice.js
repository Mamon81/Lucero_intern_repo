import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  habits: [],
  loading: false,
  error: null,
};

export const habitSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    fetchHabitsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchHabitsSuccess: (state, action) => {
      state.loading = false;
      state.habits = action.payload;
    },
    fetchHabitsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addHabit: (state, action) => {
      state.habits.push(action.payload);
    },
    removeHabit: (state, action) => {
      state.habits = state.habits.filter(
        (habit) => habit.id !== action.payload
      );
    },
  },
});

export const {
  fetchHabitsStart,
  fetchHabitsSuccess,
  fetchHabitsFailure,
  addHabit,
  removeHabit,
} = habitSlice.actions;

export default habitSlice.reducer;
