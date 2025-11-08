import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setResData(restaurants);
    setFilteredRes(restaurants);
  };

  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
        <div className="filter-search-container">
            <div className="Search">
                <input
                type="text"
                className="search-input"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                className="search-btn"
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
                className="filter-btn"
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

      <div className="restaurant-list">
        {filteredRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
