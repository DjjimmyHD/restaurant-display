import React, { Component } from "react";
import RestaurantRow from "./Components/RestaurantRow";
import "./App.scss";
import SearchBar from "./Components/SearchBar";
import Pagination from "./Components/Pagination";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      filteredRest: [],
      InputValue: "",
      currentPage: null,
      totalPages: null,
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
  onPageChanged = (data) => {
    const { restaurants } = this.state;
    const { currentPage, totalPages, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const filteredRest = restaurants.slice(offset, offset + pageLimit);

    this.setState({ currentPage, filteredRest, totalPages });
  };
  FilterByGenre = (event) => {
    let currentList = [];
    let newList = [];
    if (event.target.value !== "") {
      currentList = this.state.filteredRest;
      newList = currentList.filter((restaurant) => {
        let lowercaseGenre = restaurant.genre.toLowerCase();
        let lowercaseGenreInput = event.target.value.toLowerCase();
        return lowercaseGenre.includes(lowercaseGenreInput);
      });
    } else {
      newList = this.state.restaurants;
    }
    this.setState({
      filteredRest: newList,
    });
  };
  SearchName = (event) => {
    let currentList = [];
    let newList = [];
    if (event.target.value !== "") {
      currentList = this.state.filteredRest;
      newList = currentList.filter((restaurant) => {
        const lowercaseName = restaurant.name.toLowerCase();
        const lowercaseNameInput = event.target.value.toLowerCase();
        return lowercaseName.includes(lowercaseNameInput);
      });
    } else {
      newList = this.state.restaurants;
    }
    this.setState({
      filteredRest: newList,
    });
  };
  FilterByState = (event) => {
    let currentList = [];
    let newList = [];
    if (event.target.value !== "") {
      currentList = this.state.filteredRest;
      newList = currentList.filter((restaurant) => {
        let lowercaseState = restaurant.state.toLowerCase();
        let lowercaseStateInput = event.target.value.toLowerCase();
        return lowercaseState.includes(lowercaseStateInput);
      });
    } else {
      newList = this.state.restaurants;
    }
    this.setState({
      filteredRest: newList,
    });
  };

  render() {
    const { restaurants, filteredRest, currentPage, totalPages } = this.state;
    const totalRestaurants = restaurants.length;

    if (totalRestaurants === 0) return null;
    return (
      <div className="App">
        <h1>Search and Filter Some to Most of the Things</h1>
        <div className="d-flex flex-row align-items-center">
          <h2>
            <strong className="text-secondary">{totalRestaurants}</strong>{" "}
            Restaurants
          </h2>
          {currentPage && (
            <span className="current-page d-inline-block h-100 pl-4 text-secondary">
              Page <span className="font-weight-bold">{currentPage}</span> /{" "}
              <span className="font-weight-bold">{totalPages}</span>
            </span>
          )}
        </div>
        <div className="d-flex flex-row py-4 align-items-center">
          <Pagination
            totalRecords={totalRestaurants}
            pageLimit={10}
            pageNeighbours={1}
            onPageChanged={this.onPageChanged}
          />
        </div>
        <SearchBar
          FilterByGenre={this.FilterByGenre}
          FilterByState={this.FilterByState}
          SearchName={this.SearchName}
        />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>State</th>
              <th>Phone Number</th>
              <th>Genres</th>
            </tr>
          </thead>
          <tbody>
            {filteredRest.map((info) => (
              <RestaurantRow key={info.id} info={info} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
