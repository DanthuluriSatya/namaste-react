import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurauntMenu";
const RestaurantMenu = () => {

  const { resId } = useParams();
  const resInfo=useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } = resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")}-{costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <h1>Recommened</h1>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.name}>
            {item.card.info.name}-Rs{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
