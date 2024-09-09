import { useEffect,useState } from "react";

const useRestaurantMenu = (resId) => {
const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4059875&lng=78.3908428&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    if (!data.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};
export default useRestaurantMenu;
