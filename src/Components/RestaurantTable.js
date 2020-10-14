import React from "react";
import RestaurantRow from "./RestaurantRow";
import "./RestaurantTable.css"
const RestayurantTable = (props) => {
  const item = props.info.map((info) => {
    return <RestaurantRow key={info.id} info={info} />;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>State</th>
          <th>Phone Numner</th>
          <th>Genres</th>
        </tr>
      </thead>
      <tbody>{item}</tbody>
    </table>
  );
};
export default RestayurantTable;
