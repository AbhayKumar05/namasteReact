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
            <h3 id="TExt">{name}</h3>
            <h4 id="TExt">{cuisines.join(", ")}</h4>
            <h4 id="TExt">{avgRating}</h4>
            <h4 id="TExt">{deliveryTime}</h4>
        </div>
    );
}

export default RestaurantCard;