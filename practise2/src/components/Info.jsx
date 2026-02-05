import React from "react";
import { useLocation } from "react-router-dom";
import "./Info.css"; 
import { NavLink } from "react-router-dom";

function Info() {
  const location = useLocation();
  const formdata = location.state;

  if (!formdata) {
    return (
      <div className="info-container">
        <div className="info-card">
          <h2>No Data Found ⚠️</h2>
          <p>Please sign up first. <NavLink to="/signUp">SignUp</NavLink></p>
        </div>
      </div>
    );
  }

  return (
    <div className="info-container">
      <div className="info-card">
        <h2>User Information</h2>
        <p><span>Name:</span> {formdata.name}</p>
        <p><span>Email:</span> {formdata.email}</p>
        <p><span>Password:</span> {formdata.password}</p>
        <p><span>Confirm Password:</span> {formdata.confirmPassword}</p>
      </div>
    </div>
  );
}

export default Info;
