import React from 'react';
import './List.css'
import { useState,useEffect } from 'react';
import axios from 'axios'
import {toast} from 'react-toastify'
const List = ({url}) => {
  const [list,setlist]= useState([]);
  const fetchdata= async()=>{
    const response= await axios.get(`${url}/api/food/list`);
    // console.log(response.data);
    
    if(response.data.success){
      setlist(response.data.data)
    }
    else{
      toast.error("Error")
    }
  }

  const removeItems=async(food_id)=>{
    const responce= await axios.post(`${url}/api/food/remove`,{id:food_id});
    await fetchdata();
    if(responce.data.success){
      toast.success(responce.data.message)
    }
    else{
      toast.error("Error")
    }
// console.log( food_id);


  }
   useEffect(()=>{
   fetchdata();
   },[])
  return (
    <div className='list add flex-col'>
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {
          list.map((item,index)=>{
             return(
              <div key={index} className="list-table-format">
                <img src={`${url}/images/`+item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>${item.price}</p>
                <p onClick={()=>removeItems(item._id)} className='cross'>x</p>

              </div>
             )
          })
        }
      </div>
      
    </div>
  );
}

export default List;
