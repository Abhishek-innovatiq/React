import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar({carData}) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://png.pngtree.com/element_our/20200703/ourmid/pngtree-three-dimensional-cool-sports-car-png-image_2300881.jpg" alt="Car Rental Logo" />
        <span>DriveEasy</span>
      </div>
      <ul className="navbar-links">

       <NavLink to="/"  style={{ textDecoration: "none", color:'red',fontWeight:'500' }}><li>Home</li></NavLink>
         <NavLink to="/cart" style={{ textDecoration: "none", color:'blue',fontWeight:'500' }}> <li>Car Listing {carData.length ===0 ? "":(` = ${carData.length}`  )}</li></NavLink>
         <NavLink to="/login" style={{ textDecoration: "none", color:'blue',fontWeight:'500' }}> <li>Login/SignUp</li></NavLink>
       <NavLink to="/contact" style={{ textDecoration: "none", color:'blue',fontWeight:'500' }}>  <li>Contact</li></NavLink>
        <NavLink to="/adminLogin" style={{ textDecoration: "none", color:'blue',fontWeight:'500' }}><li>Admin Login</li></NavLink>
        <NavLink to='/info' style={{ textDecoration: "none", color:'blue',fontWeight:'500' }}> <li>Information</li> </NavLink>
      </ul>
    </nav>
  ) 
}

export default Navbar
