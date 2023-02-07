import { Outlet } from "react-router-dom";
import React from "react";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile.js";

// const About = () => {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <ProfileClass name={"PriyaClass"} xyz={"abcClass"} />
//       <Outlet />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent-Constructor");
  }

  componentDidMount() {
    //console.log("Parent-ComponentDidMount");
    this.timer = setInterval(function () {
      console.log("Hello");
    }, 1000);
  }

  componentWillUnmount() {
    console.log("Componentwillunount");
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <h1>ABOUT Class based Component</h1>
        <ProfileClass name={"FirstChild"} />
        {/* <ProfileClass name={"SecondChild"} /> */}
        {/* {console.log("Parent-render ")} */}
      </>
    );
  }
}

export default About;
