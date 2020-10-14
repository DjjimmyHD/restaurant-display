import React, { Component } from "react";
import RestaurantTable from "./Components/RestaurantTable";
import "./App.css";
import SearchBar from "./Components/SearchBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      filteredRest: [],
      InputValue: "",
    };
  }
  componentDidMount() {
    fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants", {
      headers: {
        Authorization: "Api-Key q3MNxtfep8Gt",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.sort((x, y) => {
          let a = y.name;
          let b = x.name;
          if (a > b) return -1;
          if (a < b) return 1;
          return 0;
        });
        this.setState({ restaurants: data });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Search and Filter Some to Most of the Things</h1>
        <section>
          <RestaurantTable info={this.state.restaurants} />
        </section>
      </div>
    );
  }
}

export default App;
