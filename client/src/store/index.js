import { configureStore } from '@reduxjs/toolkit';
import selectedContactReducer from './contactSlice.jsx';

//Does combine reducer for you
const store = configureStore({
  reducer: {
    selectedContactSlice: selectedContactReducer,
  },
});

export default store;
