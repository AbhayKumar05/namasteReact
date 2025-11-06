import RestaurantCard from "./RestaurantCard";
import{ useState } from "react";

const Body = () => {

    const [resData, setResData] = useState([
        {
            info: {
                id: "1",
                name: "Burger King",
                cuisines: ["Burgers", "Fast Food"],
                avgRating: "4.2",
                cloudinaryImageId: "burger_king_image",
                costForTwo: 50000,
                deliveryTime: 30
            }
        },
        {
            info: {
                id: "2",
                name: "Pizza Hut",
                cuisines: ["Pizza", "Italian"],
                avgRating: "5.0",
                cloudinaryImageId: "pizza_hut_image",
                costForTwo: 60000,
                deliveryTime: 25
            }

        },
        {
            info: {
                id: "3",
                name: "Subway",
                cuisines: ["Sandwiches", "Healthy Food"],
                avgRating: "4.5",
                cloudinaryImageId: "subway_image",
                costForTwo: 40000,
                deliveryTime: 20
            }
        },
        {
            info: {
                id: "4",
                name: "Taco Bell",
                cuisines: ["Mexican", "Fast Food"],
                avgRating: "4.0",
                cloudinaryImageId: "taco_bell_image",
                costForTwo: 35000,
                deliveryTime: 28
            }
        }
    ]);

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