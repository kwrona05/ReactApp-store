import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'

function Tile(props) {
  return (
    <div className="tile">
      <h2>{props.name}</h2>
  </div>
  )
}
const Electronic = lazy(() => import('./Electronic'))
const Food = lazy(() => import('./Food'))
const Furniture = lazy(() => import('./Furniture'))
const StreamingPlatform = lazy(() => import('./StreamingPlatform'))
const Game = lazy(() => import('./Game'))
const Book = lazy(() => import('./Book'))
const Sport = lazy(() => import('./Sport'))
const Cosmetic = lazy(() => import('./Cosmetic'))

function App() {
  return (
    <div className="container">
    <div className="header">
      <div className="btnDiv">
        <button className="offerBtn">Add</button>
      </div>
    </div>
    <div className="tileDiv">
      <Tile 
      name="Electronics and AGD"
      />
      <Tile 
      name="Food and drinks"
      />
      <Tile 
      name="Furnitures"
      />
      <Tile 
      name="Streaming platform"
      />
      <Tile 
      name="Games"
      />
      <Tile 
      name="Books"
      />
      <Tile 
      name="Sport"
      />
      <Tile 
      name="Cosmetics"
      />
    </div>
    </div>
  )
}

export default App
