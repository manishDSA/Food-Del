import React, { useContext } from 'react';
import './Navbar.css'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({setshowLlogin}) => {
    const [menu,setmenu]= useState("")
    const {getTotalCartAmount,token,setToken} = useContext(StoreContext)
    const navigate= useNavigate();
 const handleLogout=()=>{
  localStorage.removeItem("token")
  setToken("")
  navigate("/")
 }
  return (
    <div className='navbar'>
    <Link to='/'> <img src="/img/logo.png" alt="" className="logo" /></Link>
     <ul className="navbar-menu">
        <a onClick={()=>setmenu('home')} className={menu=="home"?"active":""}>home</a>
        <a href='#explore-menu' onClick={()=>setmenu('menu')}className={menu=="menu"?"active":""}>menu</a>
        <a href='#app-download'onClick={()=>setmenu('mobile-app')}className={menu=="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer'onClick={()=>setmenu('contact us')}className={menu=="contact us"?"active":""}>contact us</a>
     </ul>
     
     <div className="navbar-right">
        <img src="/img/search_icon.png" alt="" />
        <div className="navbar-search-icon">
         <Link to='/cart'>
            <img src="/img/basket_icon.png" alt="" />
         </Link>
         <div className={getTotalCartAmount()===0?"":"dot"}></div>
          
            {/* <div className="dot"></div> */}
        </div>
        { !token?<button onClick={()=>setshowLlogin(true)}>sign in</button>
          :<div className='navbar-profile'>
            <img src="/img/profile_icon.png" alt="" /> 
         <ul className='nav-profile-dropdown'>

            <li><img src="/img/bag_icon.png" alt="" /> <p>Orders</p></li>
            <hr />
            <li onClick={handleLogout}><img src="/img/logout_icon.png" alt="" /> <p>Logout</p></li>
         </ul>
            </div>
        }
        
     </div>
    </div>
  );
}

export default Navbar;
