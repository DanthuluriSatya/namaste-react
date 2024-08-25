const styleCard={
    backgroundColor: "#f0f0f0"
  }


const RestaurantCard=({resData})=>{
  
    return(
      <div className="res-card" style={styleCard}>
      <img className="res-logo"alt="res-logo"  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.cloudinaryImageId}`}/>
      <h3>{resData.name}</h3>
        <h4>{resData.avgRating}</h4>
        <h4>{resData.costForTwo}</h4>
        <h4>{resData.areaName}</h4>
      </div>
   );
  }

  export default RestaurantCard;