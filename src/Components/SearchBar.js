import React from "react";
const SearchBar = (props) => {
  return (
    <form>
      <label>
        State:
        <input name="stateCode" type="text" onChange={props.FilterByState} />
      </label>
      <label>
        Genre:
        <input name="genre" type="text" onChange={props.FilterByGenre} />
      </label>
      <label>
        Search:
        <input
          name="search"
          type="text"
          placeholder="Search..."
          onChange={props.SearchName}
        />
      </label>
    </form>
  );
};
export default SearchBar;
