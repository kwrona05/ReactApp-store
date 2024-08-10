import React from "react"
import './App.css'

function Tile(props) {
  return (
    <div className="tile">
      <h2>{props.name}</h2>
  </div>
  )
} 
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
