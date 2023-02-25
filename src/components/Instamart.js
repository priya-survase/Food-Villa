import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <>
      <div className="border border-black m-2">
        <h1 className="text-2xl font-bold p-2 m-2">{title}</h1>
        {isVisible ? (
          <button className="btn" onClick={() => setIsVisible(false)}>
            Hide
          </button>
        ) : (
          <button onClick={() => setIsVisible(true)}>Show</button>
        )}
        {isVisible && <h2 className=" p-2 m-3">{description}</h2>}
      </div>
    </>
  );
};

const InstaMart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <>
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor. Mauris pharetra et ultrices neque ornare."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() =>
          setVisibleSection(visibleSection == "about" ? "hide" : "about")
        }
      />

      <Section
        title={"Products"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor. Mauris pharetra et ultrices neque ornare."
        }
        isVisible={visibleSection === "products"}
        setIsVisible={() =>
          setVisibleSection(visibleSection == "products" ? "hide" : "products")
        }
      />

      <Section
        title={"Careers"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor. Mauris pharetra et ultrices neque ornare."
        }
        isVisible={visibleSection === "Careers"}
        setIsVisible={() =>
          setVisibleSection(visibleSection == "Careers" ? "hide" : "Careers")
        }
      />
    </>
  );
};

export default InstaMart;
