import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const loggedInUser = () => {
  return false;
};

const OnlineBar = () => {
  const isOnline = useOnline();
  return isOnline ? (
    <div className="online">
      <p>You are Online!</p>
    </div>
  ) : (
    <div className="offline">
      <p>You are Offline! Please check your internet connection.</p>
    </div>
  );
};

const Logo = () => {
  return (
    <a href="">
      <img
        className="img"
        alt="logo"
        src="https://i.pinimg.com/originals/3d/a0/00/3da000e71ddc31ec29da41266b182ade.jpg"
      />
    </a>
  );
};

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>

        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/cart"}>Cart</Link>
        </li>
        <li>
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
      <div className="header">
        {<Logo />}
        {<Navbar />}
        {isLoggedIn == "true" ? (
          <button onClick={() => setIsLoggedIn("false")}>Logout</button>
        ) : (
          <Link to={"/login"}>
            <button onClick={() => setIsLoggedIn("true")}>LogIn</button>
          </Link>
        )}
      </div>
    </>
  );
};

export default HeaderComponent;
