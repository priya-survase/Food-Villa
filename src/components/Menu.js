import { useState } from "react";
import ItemCard from "./ItemCard";
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import { IconContext } from "react-icons";

const Menu = ({ Menu }) => {
  const itemcards = Menu?.card?.card?.itemCards;
  console.log(Menu);
  const [isVisible, setIsVisible] = useState("false");
  // console.log(isVisible);
  return (
    <>
      <div className="border-b-2">
        <div className="flex justify-between m-3">
          <h2 className="text-lg font-bold">
            {Menu?.card?.card?.title}
          </h2>
          {itemcards && isVisible == "true" && (
            <button onClick={() => setIsVisible("false")}>
              <IconContext.Provider value={{ size: "1.5em" }}>
                <div className="mr-2">
                  <BsCaretDown />
                </div>
              </IconContext.Provider>
            </button>
          )}
          {itemcards && isVisible == "false" && (
            <button onClick={() => setIsVisible("true")}>
              <IconContext.Provider value={{ size: "1.5em" }}>
                <div className="mr-2">
                  <BsCaretUp />
                </div>
              </IconContext.Provider>
            </button>
          )}
        </div>
        {isVisible == "false" &&
          itemcards?.map((item) => (
            //console.log(item)
            <ItemCard foodItem={item}></ItemCard>
          ))}
      </div>
    </>
  );
};

export default Menu;
