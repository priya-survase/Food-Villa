import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurantList) {
  return restaurantList.filter((restaurant) =>
    restaurant?.data?.data?.name.includes(searchText)
  );
}

const Body = () => {
  const [filteredRestaurants, setfilteredRestaurants] =
    useState(restaurantList);
  const [searchText, setSearchText] = useState("Burger");
  return (
    <>
      <div>
        <input
          className="searchbar"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <h1>{searchText}</h1>
        <button
          onClick={() => {
            const data = filterData(searchText, restaurantList);
            setfilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="cardslist">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard
              {...restaurant?.data?.data}
              key={restaurant?.data?.data?.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
