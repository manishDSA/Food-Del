import React from 'react';
import './LoginpopUp.css'
import { useState } from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios'
const LoginpopUp = ({setshowLlogin}) => {
    const[curstate,setcurstate]=useState('Login')
    const {url,token,setToken}= useContext(StoreContext)
    const[data,setData]= useState({
      name:"",
      email:"",
      password:"",
    })


    const handlechange=(e)=>{
        const name= e.target.name;
        const value= e.target.value;

      setData(data=>({...data,[name]:value}))
    }


   const onLoginSubmit = async(event)=>{
    event.preventDefault();
    let newUrl= url;
    if(curstate==="Login"){
      newUrl+="/api/user/login";
    }
    else{
      newUrl+="/api/user/register";
    }

const response= await axios.post(newUrl,data)
if (response.data.success) {
  setToken(response.data.token)
  localStorage.setItem("token",response.data.token)
  setshowLlogin(false);
}
else{
alert(response.data.message)
}
   }
  return (
    <div className='login-popup'>
        <form onSubmit={onLoginSubmit}  className="login-popup-container">
    <div className="login-popup-title">

      <h2>{curstate}</h2>
      {/* <img onClick={()=>setshowLlogin(false)} src="/img/cross_icon.png" alt="" /> */}
      <img onClick={()=>setshowLlogin(false)} src="/img/cross_icon.png" alt="" />

    </div>
    <div className="login-popup-input">
        
        {curstate==="Login"?<></>: <input onChange={handlechange} name='name' value={data.name} type="text"  placeholder="Your name" required /> }
        <input onChange={handlechange} name='email' value={data.email}  type="email" placeholder="Your email" required />
        <input value={data.password}  onChange={handlechange} name='password' type="password" placeholder="password" required />
    </div>
    <button type='submit'>{curstate==='Sign Up'?'Create account':"Login"}</button>
<div className="login-popup-condition">
    <input type="checkbox" required />
    <p>By continuing, i agree to the term if use & privacy Policy</p>
</div>
     {curstate==="Login"?
     <p>Create a new account? <span   onClick={()=>setcurstate("Sign Up")}>click here</span></p>:
     <p>Already have an account?<span onClick={()=>setcurstate("Login")}>Login here</span></p>}
       
 
        </form>
    </div>
  );
}

export default LoginpopUp;
