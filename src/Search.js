import React from "react";
import searchIcon from "./search.svg";

const Search = () => {
  return (
    <div className="search flex-row">
      <img src={searchIcon} alt="" />
      <input type="text" placeholder="Search Twitter" />
    </div>
  );
};

export default Search;
