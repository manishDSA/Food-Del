import React from 'react';
import './ExploreMenu.css'
import { useState } from 'react';
const menu_list = [
    {
        menu_name: "Salad",
        menu_image: '/img/menu_1.png'
    },
    {
        menu_name: "Rolls",
        menu_image: '/img/menu_2.png'
    },
    {
        menu_name: "Deserts",
        menu_image: '/img/menu_3.png'
    },
    {
        menu_name: "Sandwich",
        menu_image: '/img/menu_4.png'
    },
    {
        menu_name: "Cake",
        menu_image: '/img/menu_5.png'
    },
    {
        menu_name: "Pure Veg",
        menu_image: '/img/menu_6.png'
    },
    {
        menu_name: "Pasta",
        menu_image: '/img/menu_7.png'
    },
    {
        menu_name: "Noodles",
        menu_image: '/img/menu_8.png'
    }]
const ExploreMenu = ({category,setcategory}) => {
    const[data,setdata]= useState(menu_list)
  return (
    <div className='explore-menu'id='explore-menu'>
       <h1> Explore our menu</h1>
      <p className="explore-menu-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, sunt? Sapiente dignissimos labore ducimus eaque aliquam accusantium aliquid totam cupiditate quos dolore.</p>
      <div className="explore-menu-list">
        {
        data.map((item, index) => {
                return(
                    <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":" "} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                        </div>
                )
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
