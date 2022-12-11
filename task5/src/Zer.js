import React from "react";
class Zer extends React.Component {
  state = {
    lastKey: null
  };
  randNum = () => {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    this.setState({ lastKey: randomNum });
  };
  render() {
    const { Key } = this.props;

    return (
      <>
        <main
          onClick={this.randNum}
          style={{
            height: "50px",
            width: "50px",
            background: "red",
            paddingTop: "8px"
          }}
        >
          <p>{this.state.lastKey}</p>
        </main>
        <p>{Key}</p>
      </>
    );
  }
}
export default Zer;
