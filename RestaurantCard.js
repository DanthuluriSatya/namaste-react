import React from "react";

const RestaurantCard1=({resData1})=>{
    //const  resD  = props;
    //console.log("res data ",resD)
    //console.log("props ",props)
    const m = {
      name:"bbbb"
    }
  
    return(
      <div className="res-card" style={styleCard}>
      <img className="res-logo"alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cbe4d696e337c38fddfb260997e4d215"></img>
    
    
        <h3>{resData1.name}</h3>
        {/* <h4>{resData.cuisines}</h4>
        <h4>Rating: {resData.avgRating}</h4>
        <h4>Cost for Two: {resData.costForTwo}</h4>
        <h4>Delivery Time: {resData.deliveryTime}</h4> */}
      </div>
   );
  };

  export default RestaurantCard
  