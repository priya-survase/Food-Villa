import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const restaurant = useRestaurantMenu(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex p-3">
      <div className="m-3">
        <h2>Restaurant id: {resId} </h2>
        <h1 className="font-bold text-2xl">{restaurant.name}</h1>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h2>
          {restaurant.area},{restaurant.city}
        </h2>
        <h2>{restaurant.avgRating} Stars</h2>
        <h2>{restaurant.costForTwoMsg}</h2>
      </div>

      {console.log(Object.values(restaurant?.menu?.items))}
      <div className="m-3">
        <h1 className="text-2xl font-bold">Menu</h1>
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
