import { IMG_CDN_URL } from "../config";
const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  //console.log(restaurant?.data?.data);
  //const { name, cuisines, cloudinaryImageId, avgRating } = restaurant;
  return (
    <div className="card">
      <img src={`${IMG_CDN_URL}${cloudinaryImageId}`} />
      <h2>{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{`${avgRating} Stars`}</h4>
    </div>
  );
};

export default RestaurantCard;
