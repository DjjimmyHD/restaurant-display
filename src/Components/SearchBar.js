import React from "react";
import "./SearchBar.css";
const SearchBar = (props) => {
  return (
    <form>
      <label>
        State:
        <input
          name="stateCode"
          type="text"
          value={props.InputValue}
          onChange={props.FilterByState}
        />
      </label>
      <label>
        Genre:
        <input
          name="genre"
          type="text"
          value={props.InputValue}
          onChange={props.FilterByGenre}
        />
      </label>
      <label>
        Search:
        <input
          name="search"
          type="text"
          value={props.InputValue}
        />
      </label>
    </form>
  );
};
export default SearchBar;
