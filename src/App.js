import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        // {
        //   name: "Akula",
        //   id: "1",
        // },
        // {
        //   name: "Ejdaha",
        //   id: "2",
        // },
        // {
        //   name: "Tarantula",
        //   id: "3",
        // },
        // {
        //   name: "Yakudza",
        //   id: "4",
        // },
      ],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((m) => {
      return (
        m.name.toLowerCase().includes(searchField.toLocaleLowerCase()) ||
        m.email.toLowerCase().includes(searchField.toLocaleLowerCase())
      );
    });

    return (
      <div className="App">
        <h1 className="page-header">MONSTERS</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
