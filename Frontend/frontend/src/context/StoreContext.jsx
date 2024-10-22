import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from 'axios'

const food_list = [
    {
        _id: "1",
        name: "Greek salad",
        image: '/img/food_1.png',
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    },
    {
        _id: "2",
        name: "Veg salad",
        image: '/img/food_2.png',
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    }, {
        _id: "3",
        name: "Clover Salad",
        image: '/img/food_3.png',
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    }, {
        _id: "4",
        name: "Chicken Salad",
        image: '/img/food_4.png',
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    }, {
        _id: "5",
        name: "Lasagna Rolls",
        image: '/img/food_5.png',
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    }, {
        _id: "6",
        name: "Peri Peri Rolls",
        image: '/img/food_6.png',
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    }, {
        _id: "7",
        name: "Chicken Rolls",
        image: '/img/food_7.png',
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    }, {
        _id: "8",
        name: "Veg Rolls",
        image: '/img/food_8.png',
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    }, {
        _id: "9",
        name: "Ripple Ice Cream",
        image: '/img/food_9.png',
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    }, {
        _id: "10",
        name: "Fruit Ice Cream",
        image: '/img/food_10.png',
        price: 22,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    }, {
        _id: "11",
        name: "Jar Ice Cream",
        image: '/img/food_11.png',
        price: 10,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    }, {
        _id: "12",
        name: "Vanilla Ice Cream",
        image: '/img/food_12.png',
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    },
    {
        _id: "13",
        name: "Chicken Sandwich",
        image: '/img/food_13.png',
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich"
    },
    {
        _id: "14",
        name: "Vegan Sandwich",
        image: '/img/food_14.png',
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich"
    }, {
        _id: "15",
        name: "Grilled Sandwich",
        image: '/img/food_15.png',
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich"
    }, {
        _id: "16",
        name: "Bread Sandwich",
        image: '/img/food_16.png',
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich"
    }, {
        _id: "17",
        name: "Cup Cake",
        image: '/img/food_17.png',
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake"
    }, {
        _id: "18",
        name: "Vegan Cake",
        image: '/img/food_18.png',
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake"
    }, {
        _id: "19",
        name: "Butterscotch Cake",
        image: '/img/food_19.png',
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake"
    }, {
        _id: "20",
        name: "Sliced Cake",
        image: '/img/food_20.png',
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake"
    }, {
        _id: "21",
        name: "Garlic Mushroom ",
        image: '/img/food_21.png',
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg"
    }, {
        _id: "22",
        name: "Fried Cauliflower",
        image: '/img/food_22.png',
        price: 22,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg"
    }, {
        _id: "23",
        name: "Mix Veg Pulao",
        image: '/img/food_23.png',
        price: 10,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg"
    }, {
        _id: "24",
        name: "Rice Zucchini",
        image: '/img/food_24.png',
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg"
    },
    {
        _id: "25",
        name: "Cheese Pasta",
        image: '/img/food_25.png',
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta"
    },
    {
        _id: "26",
        name: "Tomato Pasta",
        image: '/img/food_26.png',
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta"
    }, {
        _id: "27",
        name: "Creamy Pasta",
        image: '/img/food_27.png',
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta"
    }, {
        _id: "28",
        name: "Chicken Pasta",
        image: '/img/food_28.png',
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta"
    }, {
        _id: "29",
        name: "Buttter Noodles",
        image: '/img/food_29.png',
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles"
    }, {
        _id: "30",
        name: "Veg Noodles",
        image: '/img/food_30.png',
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles"
    }, {
        _id: "31",
        name: "Somen Noodles",
        image: '/img/food_31.png',
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles"
    }, {
        _id: "32",
        name: "Cooked Noodles",
        image: '/img/food_32.png',
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles"
    }
]
export const StoreContext= createContext(null);

const StoreContextProvider= (props)=>{
const [cartItems,setcartItems]= useState({})
const url= "https://food-del-backend-nsld.onrender.com"
const[token,setToken]= useState("")
const[food_list,setFoodList]= useState([])


const addToCart= async(itemId)=>{
    if(!cartItems[itemId]){
        setcartItems((prev)=>({...prev,[itemId]:1}))
    }
    else{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    if (token) {
        await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }
}

const removefromCart= async(itemId)=>{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
if (token) {
    await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
}
}

const getTotalCartAmount=()=>{
let totalAmount=0;
for(const item in cartItems)
{
    if (cartItems[item]>0) {
        
        let itemInfo = food_list.find((product)=>product._id==item)
        totalAmount += itemInfo.price * cartItems[item];
    }
}
return totalAmount;
}

const fetchFoodList = async ()=>{
    const response= await axios.get(url+"/api/food/list");
    setFoodList(response.data.data)
}

const loadCartData = async (token)=>{
    const response= await axios.post(url+"/api/cart/get",{},{headers:{token}})
    setcartItems(response.data.cartData);
}



useEffect(()=>{

async function loadData() {
    await fetchFoodList()
    
    if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"))
       
            await loadCartData(localStorage.getItem("token"))
    }
    
}
loadData()
},[])




    const contextValue={
  food_list,
  cartItems,
  setcartItems,
  addToCart,
  removefromCart,
  getTotalCartAmount,
  url,
  token,
  setToken
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider
