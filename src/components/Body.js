import RestaurantCard from "./RestaurantCard";

import resList from "../utils/mockdata";

import { useState } from "react";

//Normal Js variable
//let listOfRestaurants=null;

const Body=()=>{
  //local state variable -super powerful variable
const [listOfRestaurants,setListOfRestraunt] = useState(resList);
 /* let listOfRestaurants=[
    {
      "info": {
        "id": "316782",
        "name": "kfc",
        "cloudinaryImageId": "fyp5cfxspblejs9wmihq",
        "costForTwo": "₹100 for two",
        "cuisines": ["South Indian","Chinese"],
        "avgRating": 3.9
      }
    },
    {
        "info": {
          "id": "316783",
          "name": "dominos",
          "cloudinaryImageId": "fyp5cfxspblejs9wmihq",
          "costForTwo": "₹100 for two",
          "cuisines": ["South Indian","Chinese"],
          "avgRating": 4.0
      }   
    },
    {
      "info": {
        "id": "316785",
        "name": "mcd",
        "cloudinaryImageId": "fyp5cfxspblejs9wmihq",
        "costForTwo": "₹100 for two",
        "cuisines": ["South Indian","Chinese"],
        "avgRating": 4.0
    }   
  }   
    
];*/ 
    return (
      <div className="body">
        <div className="search">Search</div>
        <button className="filter-btn" onClick={ ()=>{ 
         //filter logic here
         const filteredList=listOfRestaurants.filter(
          (res)=> res.info.avgRating>3.9);
          setListOfRestraunt(filteredList);
          } }>Top Rated Restaurants</button>
        <div className="res-container">
          {listOfRestaurants.map((restaurant)=>(
           <RestaurantCard key={restaurant.info.id} resData={restaurant.info}/>
          ))}
           </div>
      </div>
    );
  };

  export default Body;