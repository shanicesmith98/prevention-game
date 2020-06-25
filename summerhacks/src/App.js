import React from 'react';
import Sprite from './Sprite.png';
import './App.css';

// const Dot = props => <div className="dot" />
const Container = ({children}) => (
  <div className = "Container">{children}</div>
);

class App extends React.Component {
  state = {
    horizontalIndex: 2,
    verticalIndex: 0,
    number: []
  };

  componentDidMount() {
    document.addEventListener("keydown", e => {
      if (e.key === "ArrowRight") {
        this.setState({ horizontalIndex: ++this.state.horizontalIndex });
      }
      if (e.key === "ArrowLeft") {
        this.setState({ horizontalIndex: --this.state.horizontalIndex });
      }
      if (e.key === "ArrowUp") {
        this.setState({ verticalIndex: ++this.state.verticalIndex });
      }
      if (e.key === "ArrowDown") {
        this.setState({ verticalIndex: --this.state.verticalIndex });
      }
    });
  }

  render() {
    const Boxes = props =>
      this.props.num.map((val, idx) => (
        <Container key={Math.random() * 10}>
          {this.state.index === idx ? <img className="Sprite" src={Sprite} alt="Game Sprite"/> : null}
        </Container>
      ));
    return (
      <div className="App">
        <div className="root">
          <div className="grid">
            <Boxes />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
