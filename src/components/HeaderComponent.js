import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

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
    <a href="">
      <img
        className="w-16 h-16"
        alt="logo"
        src="https://i.pinimg.com/originals/3d/a0/00/3da000e71ddc31ec29da41266b182ade.jpg"
      />
    </a>
  );
};

const Navbar = () => {
  return (
    <div>
      <ul className="flex justify-between">
        <li className="px-2">
          <Link to={"/"}>Home</Link>
        </li>

        <li className="px-2">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="px-2">
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li className="px-2">
          <Link to={"/cart"}>Cart</Link>
        </li>
        <li className="px-2">
          <Link to={"/instamart"}>InstaMart</Link>
        </li>
      </ul>
    </div>
  );
};

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("false");
  return (
    <>
      <OnlineBar />
      <div className="flex justify-between items-center p-2 bg-pink-300 font-semibold">
        {<Logo />}
        {<Navbar />}
        {isLoggedIn == "true" ? (
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
        )}
      </div>
    </>
  );
};

export default HeaderComponent;
