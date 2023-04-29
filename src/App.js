import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './containers/Header';
import AlbumListing from './containers/AlbumListing';


function App() {
  return (
    <>
    <div className="App">
      <Header /> 
      <Routes>
      <Route path="/" element={<AlbumListing />} />
      <Route>404 Not Found!</Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
