import React from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "./CarListing.css"; 

function CarListing({ carData, setcarData }) {
  function removeCar(id) {
    setcarData(carData.filter((car) => car.id !== id));
    toast.success(` remove to cart! 🛒`)
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{color:'white'}}>Your Cart</h1>
      {carData.length === 0 ? (
        <div className="empty-cart">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty Cart"
            className="empty-img"
          />
          <p className="empty-text">🛒 Your cart is empty!</p>
          <NavLink to="/" className="empty-link">
            Go to Home
          </NavLink>
        </div>
      ) : (
        <div className="cart-container">
          {carData.map((cars) => (
            <div className="cart-card" key={cars.id}>
              <img src={cars.image} alt={cars.name} className="cart-card-image" />
              <div className="cart-card-body">
                <h2 className="cart-card-title">{cars.name}</h2>
                <p className="cart-card-desc">{cars.description}</p>
                <p className="cart-card-price">💲 {cars.price}</p>
                <p className="cart-card-rating">⭐⭐⭐⭐⭐ {cars.rating}</p>
                <button
                  className="cart-card-btn"
                  onClick={() => removeCar(cars.id)}
                >
                  Remove {cars.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CarListing;
