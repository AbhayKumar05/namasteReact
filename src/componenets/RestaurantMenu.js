import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResInfo(json.data);
  };

  if (!restInfo) return <Shimmer />;

  const restaurant =
    restInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.[0]
      ?.info;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    sla,
  } = restaurant || {};

  // Extract all menu items dynamically
  const menuSections =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const allItems = [];
  menuSections.forEach((section) => {
    const items = section?.card?.card?.itemCards || [];
    allItems.push(...items);
  });

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines?.join(", ")}</p>
      <p>{costForTwoMessage}</p>
      <p>{avgRating}</p>
      <p>{totalRatingsString}</p>
      <p>{sla?.deliveryTime} mins</p>

      <h2>Menu Items:</h2>
      <ul>
        {allItems.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}
            {item.card.info.price || item.card.info.defaultprice} INR
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
