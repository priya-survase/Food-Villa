import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child-Constrcutor " + this.props.name);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "India",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/priya-survase");
    const json = await data.json();
    console.log(json);
    console.log("Child-componentDidMount " + this.props.name);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Componentdidupdate");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount");
  }

  render() {
    console.log("Child-Render " + this.props.name);
    return (
      <>
        <h1>Profile class component Page</h1>
        <h2>Name:{this.state.userInfo.name}</h2>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Location:{this.state.userInfo.location}</h2>
        {/* <h2>props: {this.state.count}</h2> */}
        {/* Updating state variable */}
        {/* <button
          onClick={() =>
            this.setState({
              count: 1,
            })
          }
        >
          SetCount
        </button> */}
      </>
    );
  }
}

export default ProfileClass;
