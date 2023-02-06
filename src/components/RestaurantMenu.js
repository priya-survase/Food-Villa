import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  console.log(resId);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=18.591945&lng=73.73897649999999&menuId=" +
        resId
    );
    const json = await data.json();
    setRestaurant(json.data);
    console.log(json);
  }

  if (!restaurant) {
    return <Shimmer />;
  }

  return (
    <div className="resDetails">
      <div className="resInfo">
        <h2>Restaurant id: {resId} </h2>
        <h1>{restaurant.name}</h1>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h2>
          {restaurant.area},{restaurant.city}
        </h2>
        <h2>{restaurant.avgRating} Stars</h2>
        <h2>{restaurant.costForTwoMsg}</h2>
      </div>

      {console.log(Object.values(restaurant?.menu?.items))}
      <div className="resMenu">
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
