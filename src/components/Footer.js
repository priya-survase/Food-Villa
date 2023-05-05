import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = (props) => {
  const { user } = useContext(UserContext);
  return (
    <div className=" w-screen bottom-0 mb-0 bg-slate-600 flex justify-center text-white ">
      <h4 className="h-20 flex justify-center items-center">
        Developed with ♥ by {user.userName}
      </h4>
    </div>
  );
};

export default Footer;
