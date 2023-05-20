import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import Menu from "./Menu";
import MenuShimmer from "./MenuShimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  //console.log(resId);

  const restaurant = useRestaurantMenu(resId);
  //console.log(restaurant);
  const itemCards = restaurant?.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
  console.log(itemCards);
  const basicInfo = restaurant?.cards[0]?.card?.card?.info;

  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div
      data-testId="Menu"
      className="max-w-screen-md min-h-[90%] mt-0 mx-auto my-auto mb-0"
    >
      <div className="">
        <p className="text-xs mt-2">
          Home / {basicInfo.city} / {basicInfo.areaName} / {basicInfo.name}{" "}
        </p>
        <div className="flex justify-between px-4 py-4 pt-9 pb-9 border-solid border-b-2">
          <div className="">
            <h1 className="font-bold text-2xl">{basicInfo.name}</h1>

            <p className="text-sm">{basicInfo.cuisines.join(", ")}</p>
            <p className="text-sm">
              {basicInfo.areaName}, {basicInfo.sla.lastMileTravel} km
            </p>
          </div>
          <div className="border-slate-200 border rounded p-1 text-xs text-center h-14 mt-auto mb-auto flex-col">
            <div className="border-b-2 p-1">{basicInfo.avgRating} ⭐</div>
            <div className="p-1">{basicInfo.totalRatingsString}</div>
          </div>

          {/* <img
            className="w-14 h-14"
            src={IMG_CDN_URL + basicInfo.cloudinaryImageId}
          /> */}
        </div>
      </div>

      {/* {console.log(
        restaurant.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
          .itemCards
      )} */}

      <div className="px-4 py-4 pt-9 pb-9">
        <h1 className="text-2xl font-bold ">Menu</h1>
        <div>
          {itemCards.map((item, index) => (
            <>
              <Menu Menu={item}></Menu>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
