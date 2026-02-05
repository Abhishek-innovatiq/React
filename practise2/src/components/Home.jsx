import React from "react";
import { cars } from "./Cars";
import Card from "./Card";
import "./Home.css";

function Home({setcarData,carData}) {
  return (
    <div className="home">
      <div className="inner">
        <div className="card-grid">
          {cars.map((car, index) => (
            <Card key={index} cars={car} carData={carData} setcarData={setcarData} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
