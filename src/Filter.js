import React from "react";

const Filter = ({handleFilter}) => (
  <>
    <label htmlFor="searchInput">Find contact by name</label>
    <input
      id="searchInput"
      type="search"
      autoComplete="off"
      onChange={handleFilter}
    ></input>
  </>
);

export default Filter;