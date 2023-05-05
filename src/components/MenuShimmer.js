const MenuShimmer = () => {
  return (
    <>
      <div className="w-70 bg-gray-300 h-50"></div>
      <div className="max-w-screen-md  mt-0 mx-auto my-auto mb-0">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div key={index}>
              <div className="max-w-screen-md mt-5 h-40 mt-0 mx-auto my-auto mb-0  flex justify-between shadow-lg">
                <div className="w-[40%] h-[100%] flex flex-col justify-between shadow-sm">
                  <div className="w-[100%] h-15 bg-gray-300"></div>
                  <div className="w-[100%] h-5 bg-gray-300"></div>
                  <div className="w-[80%] h-5 bg-gray-300"></div>
                  <div className="w-[80%] h-5 bg-gray-300"></div>
                </div>
                <div className="w-40 h-40 bg-gray-300"></div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default MenuShimmer;
