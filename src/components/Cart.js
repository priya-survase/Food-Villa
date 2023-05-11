import { useSelector, useDispatch } from "react-redux";
import ItemCard from "./ItemCard.js";
import { FOODITEM_IMG_URL } from "../config.js";
import CartItem from "./CartItems.js";
import { clearCart } from "../utils/cartSlice.js";
const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  let totalPrice = 0;
  cart.map((item) => {
    //console.log(item);
    let price =
      item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100;
    totalPrice += price;
    return totalPrice;
  });
  const dispatch = useDispatch();
  const clearCart1 = () => {
    dispatch(clearCart());
  };
  //const foodItem = cart[0];
  return cart.length ? (
    <div className="max-w-screen-md h-screen  mt-0 mx-auto my-auto mb-0">
      <button
        className="bg-red-300 p-1 mt-2 mb-2 font-bold border border-black-100 text-lg rounded-lg"
        onClick={() => clearCart1()}
      >
        Clear Cart
      </button>
      <div className="flex-col">
        <div className="flex justify-between">
          <p>Total</p>
          <p>{totalPrice}.00</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery Charges</p>
          <p>40.00</p>
        </div>
        <div className="flex justify-between">
          <p>Total Charges</p>
          <p>{totalPrice + 40.0}.00</p>
        </div>
      </div>
      {cart.map((item) => (
        <CartItem foodItem={item} />
      ))}
    </div>
  ) : (
    <div className="max-w-screen-md h-full mt-0 mx-auto my-auto mb-14 p-4 flex justify-center content-center">
      <img
        className="mt-5"
        src="https://th.bing.com/th/id/R.afa6a28d0ee0b5e7d55b7a5aecdfedec?rik=eOl3Z%2bU0XvmYlw&riu=http%3a%2f%2fiticsystem.com%2fimg%2fempty-cart.png&ehk=0omil1zRH7T3Pb5iTzvueamUQLSSb55vgY7dLFF8Bl8%3d&risl=&pid=ImgRaw&r=0"
      />
    </div>
  );
};

export default Cart;
