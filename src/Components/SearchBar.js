import React from "react";
import "./SearchBar.css";
const SearchBar = (props) => {
  return (
    <form>
      <label>
        State
        <select>
          <option>States</option>
        </select>
      </label>
      <label>
        Genre
        <select>
          <option>Genre</option>
        </select>
      </label>
      <label>
        Search:
        <input
          name="search"
          type="text"
          value={props.InputValue}
          onChange={props.FilterByState}
        />
      </label>
    </form>
  );
};
export default SearchBar;
