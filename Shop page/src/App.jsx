import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

const Electronic = lazy(() => import('./Electronic'));
const Food = lazy(() => import('./Food'));
const Book = lazy(() => import('./Book'));
const Furniture = lazy(() => import('./Furniture'))
const Game = lazy(() => import('./Game'))
const Sport = lazy(() => import('./Sport'))
const StreamingPlatform = lazy(() => import('./StreamingPlatform'))
const Cosmetic = lazy(() => import('./Cosmetic'))

function Tile({ name, path }) {
  return (
    <div className="tile">
      <Link to={path}>
        <h2>{name}</h2>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="container">
        <div className="header">
          <div className="btnDiv">
            <button className="offerBtn">Add</button>
          </div>
        </div>
        <div className="tileDiv">
          <Tile name="Electronics and AGD" path="/electronics" />
          <Tile name="Food and drinks" path="/food" />
          <Tile name="Furnitures" path="/furniture" />
          <Tile name="Streaming platform" path="/streaming" />
          <Tile name="Games" path="/games" />
          <Tile name="Books" path="/books" />
          <Tile name="Sport" path="/sport" />
          <Tile name="Cosmetics" path="/cosmetics" />
        </div>
        
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/electronics" element={<Electronic />} />
            <Route path="/food" element={<Food />} />
            <Route path="/furniture" element={<Furniture />} />
            <Route path="/streaming" element={<StreamingPlatform />} />
            <Route path="/games" element={<Game />} />
            <Route path="/books" element={<Book />} />
            <Route path="/sport" element={<Sport />} />
            <Route path="/cosmetics" element={<Cosmetic />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
