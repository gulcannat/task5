import React from "react";
import Zer from "./Zer";
class Dice extends React.Component {
  state = {
    lastKey: null
  };
  componentDidMount() {
    window.addEventListener("keypress", this.randNum);
  }
  componentWillUnmount() {
    window.removeEventListener("keypress", this.randNum);
  }

  randNum = () => {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    this.setState({ lastKey: randomNum });
  };
  render() {
    return (
      <main style={{ display: "flex", gap: "3px" }}>
        <Zer />
        <Zer />
        <Zer Key={this.state.lastKey} />
      </main>
    );
  }
}
export default Dice;
