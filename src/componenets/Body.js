import RestaurantCard from "./RestaurantCard";
import{ useState, useEffect } from "react";

const Body = () => {

    const [resData, setResData] = useState([]);


    useEffect(() => {
        // API Call
        fetchData();
    }
    , []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);

        setResData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    }

    return (
        <div className="body">
            <div className="Search">
                <input type="text" className="search-input" />
                <button className="search-btn"></button>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                     const resDataList = resData.filter(
                        (res) => res.info.avgRating >= 4.5
                        );
                        setResData(resDataList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-list">
                {resData.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
}

export default Body;