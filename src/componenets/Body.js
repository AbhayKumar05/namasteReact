import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus"; 

const Body = () => {
  const [resData, setResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard); 

  // if no dependency array => useEffect called on every render
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setResData(restaurants);
    setFilteredRes(restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>🔴 Looks like you're offline </h1>
    );
  }


  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
        <div className="filter-search-container flex justify-between">
            <div className=" bg-grey-200 rounded-sm">
                <input
                type="text"
                className="search-input bg-gray-100 p-1 m-3 rounded-sm border border-gray-300"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                className="search-btn px-3 py-1 bg-blue-800 text-white m-3 rounded-sm"
                onClick={() => {
                    const filtered = resData.filter((res) =>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRes(filtered);
                }}
                >
                Search
                </button>
            </div>

            <div className="filter">
                <button
                className="filter-btn bg-blue-800 text-white px-3 m-3 rounded-sm"
                onClick={() => {
                    const topRated = resData.filter(
                    (res) => res.info.avgRating >= 4.2
                    );
                    setFilteredRes(topRated);
                }}
                >
                Top Rated Restaurants
                </button>
            </div>
        </div>

      <div className="restaurant-list flex flex-wrap justify-center">
        {filteredRes.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}>
            {restaurant.info.promoted ? (
              <PromotedRestaurantCard resData={restaurant}
              /> 
            ) : (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            )}
          </Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
