// placeSlice.js

import { createSlice } from '@reduxjs/toolkit';

const placeSlice = createSlice({
  name: 'places',
  initialState: {
    allPlaces: [], // List of all places
    visitedPlaces: [], // List of visited places
  },
  reducers: {
    setAllPlaces: (state, action) => {
      state.allPlaces = action.payload;
    },
    toggleVisited: (state, action) => {
      const placeId = action.payload;
      if (state.visitedPlaces.includes(placeId)) {
        state.visitedPlaces = state.visitedPlaces.filter(id => id !== placeId);
      } else {
        state.visitedPlaces.push(placeId);
      }
    },
  },
});

export const { setAllPlaces, toggleVisited } = placeSlice.actions;
export default placeSlice.reducer;
