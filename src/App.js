import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './containers/Header';
import AlbumListing from './containers/AlbumListing';
import FavoritesListing from './containers/FavoritesListing';


function App() {
  return (
    <>
    <div className="App">
      <Header /> 
      <Routes>
      <Route path="/" element={<AlbumListing />} />
      <Route path="/favorites" element={<FavoritesListing />} />
      <Route>404 Not Found!</Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
