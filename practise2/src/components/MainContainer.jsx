import React from 'react'
import Navbar from './Navbar'
import Login from './Login'
import Home from './Home'
import ContactUs from './ContactUs'
import { Routes,Route } from 'react-router-dom'
import SignUp from './SignUp.jsx'
import AdminLogin from './AdminLogin.jsx'
import Info from './Info.jsx'
import CarListing from './CarListing.jsx'
import { useState } from 'react'



function MainContainer() {
  const [carData, setcarData] = useState([])
  return (
    <div>
      <Navbar carData={carData}/>

       <Routes>
            <Route path='/' element={<Home carData={carData} setcarData={setcarData}/>}/>
            <Route path='/cart' element={<CarListing  carData={carData} setcarData={setcarData}  />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signUp' element={<SignUp/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/adminLogin' element={<AdminLogin/>}/>
            <Route path='/info' element={<Info/>} />
       </Routes>
      
    </div>
  )
}

export default MainContainer
