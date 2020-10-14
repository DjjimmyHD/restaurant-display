import { render } from "@testing-library/react";
import React, { Component } from "react";
import RestaurantRow from "./RestaurantRow";
import "./RestaurantTable.css";

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
  render() {
    return (
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
          {/* {this.filteredResults.map((filteredResult) => {
            return (
              <RestaurantRow key={filteredResult.id} info={filteredResult} />
            );
          })} */}
        </tbody>
      </table>
    );
  }
}
export default RestaurantTable;
