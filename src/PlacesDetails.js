// PlaceDetails.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PlaceDetails = () => {
  const { id } = useParams();
  const place = useSelector((state) =>
    state.places.allPlaces.find((p) => p.id === id)
  );

  if (!place) return <p>Place not found</p>;

  return (
    <div>
      <Link to="/">Back to List</Link>
      <h1>{place.name}</h1>
      <img src={place.imageUrl} alt={place.name} width="300" />
      <p>{place.description}</p>
    </div>
  );
};

export default PlaceDetails;
