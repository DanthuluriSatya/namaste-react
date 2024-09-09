import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineGame from "./OfflineGame";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [message, setMessage] = useState('');
  const [foodItems, setFoodItems] = useState([]);
  const [topRatedChains, settopRatedChains] = useState([]);
  const [topRatedChainsbanner, settopRatedChainsbanner] = useState([]);
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestauranut, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4116313&lng=78.3986958&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const extractedMessage = json.data.cards[0].card.card.header.title;
    const extractedItems = json.data.cards[0].card.card.imageGridCards.info;
    const extractedtopRatedChainsMessage = json.data.cards[1].card.card.header.title;
    
    setMessage(extractedMessage);
    setFoodItems(extractedItems);
    settopRatedChains(extractedtopRatedChainsMessage);
    settopRatedChainsbanner(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
/*
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
*/

  const searchCall = () => {
    const filteredRestauranut = listOfRestaurants.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRestaurant(filteredRestauranut);
  };

  const handleKeyDown = (e) => {
    setSearchText(e.target.value);
    if (e.key === 'Enter') {
      setSearchText(e.target.value);
      searchCall();
    }
  };

  const handleKeyDown1 = () => {
    searchCall();
  };
const onlineStatus =useOnlineStatus();
if(onlineStatus===false) 
  return (
   <h1>Your status is offline!!!! Check your internet connection!! </h1>
   // <OfflineGame /> // Show offline game when offline
  );
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            onKeyDown={handleKeyDown}
            placeholder="Press Enter"
          />
          <button onClick={handleKeyDown1}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 3.9
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div><h1>{message}</h1></div>
      <div className="banner-container">
        {foodItems.map((banner) => (
          <div key={banner.id} className="banner-item">
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${banner.imageId}`}
              alt={banner.description}
            />
          </div>
        ))}
      </div>
      <div>
        <h1>{topRatedChains}</h1>
      </div>
      <div className="topratedres-container">
        {topRatedChainsbanner.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
      <div className="res-container">
        {filteredRestauranut.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restauraunts/" + restaurant.info.id}>
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
