import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import themesReducer from '../features/themes/themesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    themes: themesReducer
  },
});
