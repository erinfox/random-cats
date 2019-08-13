import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

class RandomGif extends Component {
  state = {name: "erin"};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Hello, {this.state.name}!</h3>
        </header>
      </div>
    );
  }
}

export default App;
