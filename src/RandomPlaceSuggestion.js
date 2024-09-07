// RandomPlaceSuggestion.js

import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const RandomPlaceSuggestion = () => {
  const places = useSelector((state) => state.places.allPlaces);
  const [suggestedPlace, setSuggestedPlace] = useState(null);

  const suggestRandomPlace = () => {
    const randomIndex = Math.floor(Math.random() * places.length);
    setSuggestedPlace(places[randomIndex]);
  };

  return (
    <div>
      <button onClick={suggestRandomPlace}>Suggest a Random Place</button>
      {suggestedPlace && (
        <div>
          <h2>Suggested Place</h2>
          <img
            src={suggestedPlace.imageUrl}
            alt={suggestedPlace.name}
            width="100"
          />
          <h3>{suggestedPlace.name}</h3>
          <p>{suggestedPlace.description}</p>
        </div>
      )}
    </div>
  );
};

export default RandomPlaceSuggestion;
