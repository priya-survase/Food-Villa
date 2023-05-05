import { CAROUSEL_IMG_URL } from "../config.js";

const Carousel = () => {
  return (
    <>
      <div className="bg-slate-600 w-screen h-94 flex p-2 justify-between">
        <img
          src={CAROUSEL_IMG_URL + "pneknawbadtvceqzwiep"}
          className="w-63 h-72 mr-1 hover:w-70"
        />
        <img
          src={CAROUSEL_IMG_URL + "zpkkdkmvlj5cuvqbc50t"}
          className="w-63 h-72 mr-1 hover:w-70"
        />
        <img
          src={CAROUSEL_IMG_URL + "awurei8ypqkafoqay9ym"}
          className="w-63 h-72 mr-1 hover:w-70"
        />
        <img
          src={CAROUSEL_IMG_URL + "ifi2lbzxeu1hvsqrsip3"}
          className="w-63 h-72 mr-1 hover:w-70"
        />
      </div>
    </>
  );
};
export default Carousel;
