import { useEffect, useState } from "react";
import { restaurantList } from "../config";
import useAllRestaurants from "../utils/useAllRestaurants.js";
import useOnline from "../utils/useOnline";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper.js";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("initialrender");

  useEffect(() => {
    //API Call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.591945&lng=73.73897649999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRestaurants) return null;

  //if (filteredRestaurants.length === 0) return <h1>No match found</h1>;

  if (filteredRestaurants.length === 0) return <Shimmer />;
  else {
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
          <button
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setfilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="cardslist">
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link to={"/restaurant/" + restaurant?.data?.id}>
                <RestaurantCard
                  {...restaurant?.data}
                  key={restaurant?.data?.id}
                />
              </Link>
            );
          })}
        </div>
      </>
    );
  }
};

export default Body;
