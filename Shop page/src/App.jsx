import React from "react"
import './App.css'

function Tile(props) {
  return (
    <li className="tile">
  <img src={props.img} alt={props.title}></img>
  <h3>{props.title}</h3>
  <p>{props.date}</p>
  <p>{props.sale}</p>
  <p>{props.details}</p>
  </li>
  )
} 
function App() {
  return (
    <div>
      <div>
      <p>Electronic</p>
      <p>Food and drinks</p>
      <p>Furniture</p>
      </div>
      <Tile 
      title="Snickers"
      date="To 10.08.2024"
      sale="40%"
      details="You have to buy two snacks"
      />
      <Tile 
      title="Iphone"
      date="-"
      sale="20%"
      details="If you are a student you have 20% off on Ispot" />
    </div>
  )
}

export default App
