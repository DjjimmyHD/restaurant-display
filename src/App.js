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

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items,
    });
  }
  FilterByState = (event) => {
    let fliterStates = this.state.restaurants.filter(
      (restaurant) => restaurant.state.includes(`${event.target.value}`)
    );
    console.log(fliterStates)
    this.setState({
      InputValue: event.target.value,
      filteredRest: fliterStates,
    });
  };
  FilterByGenre = (event) => {
    let fliterStates = this.state.restaurants.filter(
      (restaurant) => restaurant.genre === `${event.target.value}`
    );
    this.setState({
      InputValue: event.target.value,
      filteredRest: fliterStates,
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Search and Filter Some to Most of the Things</h1>
        <section>
          <SearchBar FilterByState={this.FilterByState} />
          <RestaurantTable info={this.state.restaurants} />
        </section>
      </div>
    );
  }
}

export default App;
