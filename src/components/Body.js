import { useEffect, useState } from "react";
import { restaurantList } from "../config";
import useAllRestaurants from "../utils/useAllRestaurants.js";
import useOnline from "../utils/useOnline";
import RestaurantCard from "./RestaurantCard";
import Carousel from "./Carousel";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper.js";
import MenuShimmer from "./MenuShimmer";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState(true);

  console.log("initialrender");

  useEffect(() => {
    //API Call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.591945&lng=73.73897649999999&page_type=DESKTOP_WEB_LISTING"
    );

    // const data = await fetch(
    //   "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5912716&lng=73.73890899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    //console.log(data);

    const json = await data.json();
    console.log(json);
    console.log(
      json?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setAllRestaurants(
      json?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilteredRestaurants(
      json?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  if (!allRestaurants) return null;

  //if (filteredRestaurants.length === 0) return <h1>No match found</h1>;

  if (filteredRestaurants.length === 0) return <Shimmer />;
  else {
    return (
      <>
        {/* <div className="bg-slate-600 w-screen"><</div> */}
        <Carousel />
        <div className="border flex justify-between items-center">
          <div className="text-lg font-bold ml-2">
            {filteredRestaurants.length} Restaurants
          </div>
          <div className="mt-1 flex justify-center mr-2">
            <input
              data-testId="search-input"
              className="m-1 bg-slate-100 p-2 rounded-md focus-within:purple border-slate-500 border"
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              data-testId="search-btn"
              className="bg-slate-500 text-white rounded-md m-1 w-20"
              onClick={() => {
                const data = filterData(searchText, allRestaurants);
                if (data.length) {
                  setfilteredRestaurants(data);
                  setSearchResult(true);
                } else setSearchResult(false);
              }}
            >
              Search
            </button>
          </div>
        </div>
        {/* <iframe
          className="hidden"
          src="https://cors-anywhere.herokuapp.com/corsdemo"
        ></iframe> */}
        <div data-testId="res-list" className="flex w-full flex-wrap">
          {searchResult ? (
            filteredRestaurants.map((restaurant) => {
              return (
                <Link to={"/restaurant/" + restaurant?.info?.id}>
                  <RestaurantCard
                    {...restaurant?.info}
                    key={restaurant?.info?.id}
                  />
                </Link>
              );
            })
          ) : (
            <div className="w-full flex justify-center">
              <img
                className="w-[50%]"
                src="https://www.replaylistings.com/assets/images/result-not-found-1.png"
              />
            </div>
          )}
        </div>
      </>
    );
  }
};

export default Body;
