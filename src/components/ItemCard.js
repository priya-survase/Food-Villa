import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { FOODITEM_IMG_URL } from "../config";
const itemCard = ({ foodItem }) => {
  //console.log(fooditem);
  const dispatch = useDispatch();
  const handleAddItem = (foodItem) => {
    //console.log(foodItem);
    dispatch(addItem(foodItem));
  };
  return (
    <>
      <div className="flex justify-between items-center border-b-2 p-3">
        <div>
          <h2 className="text-base font-bold">{foodItem.card.info.name}</h2>
          <p>
            ₹{" "}
            {foodItem.card.info.price / 100 ||
              foodItem.card.info.defaultPrice / 100}
          </p>
          <div className="text-slate-600 text-sm">
            {foodItem.card.info.description}
          </div>
        </div>
        <div className="flex flex-col items-center w-40 h-15">
          {foodItem?.card?.info?.imageId && (
            <img src={FOODITEM_IMG_URL + foodItem?.card?.info?.imageId} />
          )}

          <button
            onClick={() => handleAddItem(foodItem)}
            className="w-20 h-8 border border-slate-400 rounded text-green-600 mt-1"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};
export default itemCard;
