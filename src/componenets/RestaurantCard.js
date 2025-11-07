import { CDN_URL } from "../util/constnts";

const RestaurantCard = (props) => {
    const {resData} = props;

    const{
        name,
        cuisines,
        avgRating,
        cloudinaryImageId,
        deliveryTime
    }= resData?.info;


    return ( 
        <div className="restaurant-card">
            <img 
            className="restaurant-image"
            src={CDN_URL + cloudinaryImageId}
            alt="restaurant-logo"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    );
}

export default RestaurantCard;