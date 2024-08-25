import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu=()=>{

    const [resInfo,setResInfo]=useState(null);

  const { resId }= useParams();
    useEffect(() => {
       // alert("hello")
        fetchMenu();
      }, []);
    const fetchMenu=async()=>{
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4059875&lng=78.3908428&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");

        if (!data.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        const json= await data.json();
        setResInfo(json.data);
        };
        if(resInfo===null)return <Shimmer/>;
        const {name, cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
        const {itemCards}=resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
        console.log(itemCards);
return (
    <div className="menu"> 
    <h1>{name}</h1>
    <p>{cuisines.join(",")}-{costForTwoMessage}</p>
    <h2>Menu</h2>
            <h1>Recommened</h1>
            <ul>
                {itemCards.map(item=>
                <li key={item.card.info.name}>
                    {item.card.info.name}-Rs{item.card.info.price/100}
                </li>
                )}
            </ul>
    </div>
)
}

export default RestaurantMenu;