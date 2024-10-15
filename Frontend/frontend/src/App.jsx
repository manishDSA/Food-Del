import React from 'react';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Placeorder from './pages/Placeorder/Placeorder';
import Footer from './Components/Footer/Footer';
import LoginpopUp from './Components/LoginpopUp/LoginpopUp';


const App = () => {
  const[showLlogin ,setshowLlogin]= useState(false)
  return (
    <>
    {showLlogin?<LoginpopUp setshowLlogin={setshowLlogin}/>:<></>}
    <div className='app'>
   <Navbar setshowLlogin={setshowLlogin}/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/placeorder" element={<Placeorder/>}/>

  

    
   </Routes>

    </div>
    <Footer/>
    </>
  );
}

export default App;
