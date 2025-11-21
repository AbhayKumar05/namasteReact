import { CDN_URL } from "../util/constnts";

const RestaurantCard = (props) => {
    const {resData} = props;

    const{
        name,
        cuisines,
        avgRating,
        cloudinaryImageId,
        deliveryTime,
        costForTwo,
        sla,
    }= resData?.info;



    return ( 
        <div className="shadow-lg p-5 m-5 bg-gray-50 rounded-lg w-95 h-96">
            <img 
            className="restaurant-image rounded-md w-70 justify-self-center-safe"
            src={CDN_URL + cloudinaryImageId}
            alt="restaurant-logo"
            />
            <h3 className="font-semibold pt-2 pb-3" id="TExt">{name}</h3>
            <h4 className="font-light font-sans" id="TExt">{cuisines.join(", ")}</h4>
            <h4 className="font-light font-sans" id="TExt">{avgRating}</h4>
            <h4 className="font-light font-sans" id="TExt">{costForTwo}</h4>
            <h4 className="font-light font-sans" id="TExt">{sla?.slaString}</h4>
            <h4 className="font-light font-sans" id="TExt">{deliveryTime}</h4>
        </div>
    );
}


export const withPromotedLabel = (RestaurantCard) => {
        return (props) => {
            return (
                <div>
                    < RestaurantCard {...props} />  
                    <label className="promoted-label bg-black text-white px-2 py-1 ml-2 rounded-md text-sm">Promoted</label>
                </div>
            );
        };
    }


export default RestaurantCard;