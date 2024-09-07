// HistoricalPlacesList.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllPlaces, toggleVisited } from './placeSlice'; // Import actions from your Redux slice
import mockData from './mockData'; // Import mock data for testing

const HistoricalPlacesList = () => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places.allPlaces);
  const visitedPlaces = useSelector((state) => state.places.visitedPlaces);
  const loading = places.length === 0; // Simple loading state

  useEffect(() => {
    // Simulate fetching data from an API
    dispatch(setAllPlaces(mockData));
  }, [dispatch]);

  const handleToggleVisited = (placeId) => {
    dispatch(toggleVisited(placeId));
  };

  return (
    <div>
      <h1>Historical Places</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {places.map((place) => (
            <li key={place.id} style={{ marginBottom: '20px' }}>
              <img src={place.imageUrl} alt={place.name} width="200" style={{ display: 'block', marginBottom: '10px' }} />
              <h2>{place.name}</h2>
              <p>{place.description}</p>
              <button onClick={() => handleToggleVisited(place.id)}>
                {visitedPlaces.includes(place.id) ? 'Unmark as Visited' : 'Mark as Visited'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HistoricalPlacesList;
