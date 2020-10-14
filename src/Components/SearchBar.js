import React from "react";
import "./SearchBar.css";
const SearchBar = () => {
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
          <input type="text" />
        </label>
      </form>
  );
};
export default SearchBar;
