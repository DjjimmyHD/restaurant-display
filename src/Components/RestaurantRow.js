import React from "react";
const RestaurantRow = (props) => {
  return (
    <tr>
      <td>{props.info.name}</td>
      <td>{props.info.city}</td>
      <td>{props.info.state}</td>
      <td>{props.info.telephone}</td>
      <td>{props.info.genre}</td>
    </tr>
  );
};
export default RestaurantRow;
