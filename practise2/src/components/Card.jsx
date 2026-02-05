import React from 'react'
import "./Card.css"
import { toast } from "react-toastify";

function Card({ cars,setcarData,carData }) {
  function addCar(){
    let isExist = carData.some((item) => item.id === cars.id);
    if (!isExist) {
      setcarData([...carData, cars]);
      toast.success(`${cars.name} added to cart! 🛒`);
    } else {
      toast.warning(`${cars.name} is already in the cart`);
    }
  }

  return (
    <div className="card">
      <img src={cars.image} alt={cars.name} className="card-image" />
      <div className="card-body">
        <h2 className="card-title">{cars.name}</h2>
        <p className="card-desc">{cars.description}</p>
        <p className="card-price">💲 {cars.price}</p>
        <p className="card-rating">⭐⭐⭐⭐⭐ {cars.rating}</p>
        <button className='card-btn' onClick={addCar}>Add {cars.name}</button>
      </div>
    </div>
  )
}

export default Card
