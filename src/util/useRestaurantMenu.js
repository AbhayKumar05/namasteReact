import { useEffect, useState } from "react";
import { MENU_API } from "../util/constnts";


const useRestaurantMenu = (resId) => {
    const [restInfo, setResInfo] = useState(null);

    useEffect(() => {
        const fetchMenuData = async () => {
            const data = await fetch(MENU_API + resId);
            const json = await data.json();
            setResInfo(json.data);
        };

        fetchMenuData();
    }
    , [resId]);

    return restInfo;
}

export default useRestaurantMenu;