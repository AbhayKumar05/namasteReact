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

  console.log("Menu Data", restInfo);

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

  return restInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines?.join(", ")}</p>
      <p>{costForTwoMessage}</p>
      <p>{avgRating}</p>
      <p>{totalRatingsString}</p>
      <p>{sla?.deliveryTime} mins</p>
      <ul>
        <li>Idly</li>
        <li>Dosa</li>
        <li>Vada</li>
        <li>Uttapam</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
