// store.js

import { configureStore } from '@reduxjs/toolkit';
import placeReducer from './placeSlice'; // Import your reducers here

const store = configureStore({
  reducer: {
    places: placeReducer, // Add your reducers here
  },
});

export default store;
