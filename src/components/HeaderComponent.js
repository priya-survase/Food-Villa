import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import { CiDiscount1 } from "react-icons/ci";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { IconContext } from "react-icons";

const loggedInUser = () => {
  return false;
};

const OnlineBar = () => {
  const isOnline = useOnline();
  return isOnline ? (
    <div className="px-1 bg-green-400">
      <p>You are Online!</p>
    </div>
  ) : (
    <div className="px-1 bg-red-500">
      <p>You are Offline! Please check your internet connection.</p>
    </div>
  );
};

const Logo = () => {
  return (
    <Link to={"/"}>
      <img
        className="w-16 h-16"
        alt="logo"
        src="https://i.pinimg.com/originals/3d/a0/00/3da000e71ddc31ec29da41266b182ade.jpg"
      />
    </Link>
  );
};

const Navbar = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div>
      <ul className="flex justify-between">
        {/* <li className="px-2">
          <Link to={"/"}>Home</Link>
        </li> */}

        <li className="px-2 ml-4">
          <link
            type="image/png"
            sizes="16x16"
            rel="icon"
            href=".../icons8-discount-16.png"
          />
          {/* <Link to={"/about"}> */}
          <div className="flex">
            <IconContext.Provider value={{ size: "1.5em" }}>
              <div className="mr-2">
                <CiDiscount1 />
              </div>
            </IconContext.Provider>
            Offers
          </div>
          {/* </Link> */}
        </li>

        <li className="px-2 ml-4">
          <Link to={"/cart"}>
            <div className="flex">
              <IconContext.Provider value={{ size: "1.5em" }}>
                <div className="mr-2">
                  <FiShoppingCart />
                </div>
              </IconContext.Provider>
              Cart -{cartItems.length}
            </div>
          </Link>
        </li>
        <li className="px-2 ml-4">
          {/* <Link to={"/contact"}> */}
          <div className="flex">
            <IconContext.Provider value={{ size: "1.5em" }}>
              <div className="mr-2">
                <FiUser />
              </div>
            </IconContext.Provider>
            Priya
          </div>
          {/* </Link> */}
        </li>
        {/* <li className="px-2">
          <Link to={"/instamart"}>InstaMart</Link>
        </li> */}
      </ul>
    </div>
  );
};

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("false");
  return (
    <>
      <OnlineBar />
      <div className="flex justify-between items-center p-2 font-c font-semibold shadow-lg border">
        {<Logo />}
        {<Navbar />}
        {/* {isLoggedIn == "true" ? (
          <button
            className="bg-purple-500 p-2 rounded-md"
            onClick={() => setIsLoggedIn("false")}
          >
            Logout
          </button>
        ) : (
          <Link to={"/login"}>
            <button
              className="bg-purple-500 p-2 rounded-md"
              onClick={() => setIsLoggedIn("true")}
            >
              LogIn
            </button>
          </Link>
        )} */}
      </div>
    </>
  );
};

export default HeaderComponent;
