import React from "react";
import searchIcon from "../assets/searchIcon.svg";
import "../styles/SearchSection.css";

const Search = ({ searchText, setSearchText }) => {
  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder="search"
        className="search-input"
      />
      <img src={searchIcon} alt="Search Icon" />
    </div>
  );
};

export default Search;
