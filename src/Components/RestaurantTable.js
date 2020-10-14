import { render } from "@testing-library/react";
import React, { Component } from "react";
import RestaurantRow from "./RestaurantRow";
import "./RestaurantTable.css";
import SearchBar from "./SearchBar";

class RestaurantTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredResults: [],
    };
  }
  componentDidMount() {
    this.setState({
      filteredResults: this.props.info,
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      filteredResults: nextProps.info,
    });
  }
  handleChange = (e) => {
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.props.info;
      newList = currentList.filter((restaurant) => {
        const lowercaseName = restaurant.name.toLowerCase();
        const lowercaseNameInput = e.target.value.toLowerCase();
        return lowercaseName.includes(lowercaseNameInput);
      });
    } else {
      newList = this.props.info;
    }
    this.setState({
      filteredResults: newList,
    });
  };
  FilterByState = (event) => {
    let currentList = [];
    let newList = [];
    if (event.target.value !== "") {
      currentList = this.props.info;
      newList = currentList.filter((restaurant) => {
        let lowercaseState = restaurant.state.toLowerCase();
        let lowercaseStateInput = event.target.value.toLowerCase();
        return lowercaseState.includes(lowercaseStateInput);
      });
    } else {
      newList = this.props.info;
    }
    this.setState({
      filteredResults: newList,
    });
  };
  FilterByGenre = (event) => {
    let currentList = [];
    let newList = [];
    if (event.target.value !== "") {
      currentList = this.props.info;
      newList = currentList.filter((restaurant) => {
        let lowercaseGenre = restaurant.genre.toLowerCase();
        let lowercaseGenreInput = event.target.value.toLowerCase();
        return lowercaseGenre.includes(lowercaseGenreInput);
      });
    } else {
      newList = this.props.info;
    }
    this.setState({
      filteredResults: newList,
    });
  };
  render() {
    return (
      <section>
        <SearchBar
          FilterByGenre={this.FilterByGenre}
          FilterByState={this.FilterByState}
          handleChange={this.handleChange}
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
            {this.state.filteredResults.map((filteredResult) => {
              return (
                <RestaurantRow key={filteredResult.id} info={filteredResult} />
              );
            })}
          </tbody>
        </table>
      </section>
    );
  }
}
export default RestaurantTable;
