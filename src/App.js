import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Akula",
          id: "1",
        },
        {
          name: "Ejdaha",
          id: "2",
        },
        {
          name: "Tarantula",
          id: "3",
        },
        {
          name: "Yakudza",
          id: "4",
        },
      ],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((m) => (
          <p key={m.id}>{m.name}</p>
        ))}
      </div>
    );
  }
}

export default App;
