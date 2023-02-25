import { useContext } from "react";
import UserContext from "../../utils/UserContext";

const Footer = (props) => {
  const { user } = useContext(UserContext);
  return (
    <div className="h-12 bg-slate-600 flex justify-center text-white ">
      <h4 className="mt-3">Developed with ♥ by {user.userName}</h4>
    </div>
  );
};

export default Footer;
