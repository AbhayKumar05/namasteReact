import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../util/useRestaurantMenu";

const RestaurantMenu = () => {
  //const [restInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const restInfo = useRestaurantMenu(resId);

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


  const category = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.title === "Recommended")[0]; 
  const categories = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle"); 
  console.log(categories);

  // Extract all menu items dynamically
  const menuSections =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const allItems = [];
  menuSections.forEach((section) => {
    const items = section?.card?.card?.itemCards || [];
    allItems.push(...items);
  });

  const { itemCards } = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mt-6 pb-10">{name}</h1>
      <p>{cuisines?.join(", ")}</p>
      <p>{costForTwoMessage}</p>
      <p>{avgRating}</p>
      <p>{totalRatingsString}</p>
      <p>{sla?.deliveryTime} mins</p>

      {category.map((category, index) => (
        <div key={index} className="my-4">
          <h2 className="text-xl font-semibold mb-2">{category.card.card.title}</h2>
        </div>
      ))}
      
    </div>
  );
};

export default RestaurantMenu;
