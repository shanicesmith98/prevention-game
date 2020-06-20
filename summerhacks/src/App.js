import React , { Component } from 'react';
import Sprite from "./sprite.png";

const Dot = props => <div className="dot" />
const Container = ({children}) => (
  <div className = "container" style={{width: "100px", height: "100px"}}>{children}</div>
);

class App extends React.Component {
  state = {
    index: 2,
    number: []
  };

  componentDidMount() {
    document.addEventListener("keydown", e => {
      if (e.key === "ArrowRight") {
        this.setState({ index: ++this.state.index });
      }
      if (e.key === "ArrowLeft") {
        this.setState({ index: --this.state.index });
      }
    });
  }

  render() {
    const Boxes = props =>
      this.props.num.map((val, idx) => (
        <Container key={Math.random() * 10}>
          {this.state.index === idx ? <Dot /> : null}
        </Container>
      ));
    return (
      <div className="App">
        <div className="root">
          <Boxes />
        </div>
      </div>
    );
  }
}

export default App;
