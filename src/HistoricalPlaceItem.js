// HistoricalPlaceItem.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleVisited } from './placeSlice';

const HistoricalPlaceItem = ({ place }) => {
  const dispatch = useDispatch();
  const visitedPlaces = useSelector((state) => state.places.visitedPlaces);

  const isVisited = visitedPlaces.includes(place.id);

  const handleToggle = () => {
    dispatch(toggleVisited(place.id));
  };

  return (
    <div>
      <img src={place.imageUrl} alt={place.name} width="100" />
      <h2>{place.name}</h2>
      <p>{place.description}</p>
      <button onClick={handleToggle}>
        {isVisited ? 'Unmark as Visited' : 'Mark as Visited'}
      </button>
    </div>
  );
};

export default HistoricalPlaceItem;
