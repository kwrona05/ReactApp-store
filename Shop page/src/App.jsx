import React from "react"
import './App.css'

function Tile(props) {
  return (
    <li className="tile">
      <h2>{props.name}</h2>
  </li>
  )
} 
function App() {
  return (
    <div className="container">
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
    </div>
    <div className="tileDiv">
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
      name="Other"
      />
    </div>
    </div>
  )
}

export default App
