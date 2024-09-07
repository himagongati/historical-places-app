// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HistoricalPlacesList from './HistoricalPlacesList';
import PlaceDetails from './PlacesDetails';
import RandomPlaceSuggestion from './RandomPlaceSuggestion';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HistoricalPlacesList />} />
      <Route path="/place/:id" element={<PlaceDetails />} />
      <Route path="/suggest" element={<RandomPlaceSuggestion />} />
    </Routes>
  </Router>
);

export default App;
