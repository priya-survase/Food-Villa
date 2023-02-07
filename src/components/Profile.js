import { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Profile Functional Component Page</h1>
      <h2>Name:{props.name}</h2>
      <h2>XYZ:{props.xyz}</h2>
      <h2>count:{count}</h2>
      <button onClick={() => setCount(1)}>setCount</button>
    </>
  );
};

export default Profile;
