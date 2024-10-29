import React from "react";
import Search from "./Search";
import cameraHeading from "../assets/CameraHeading.svg";
import "../styles/SearchSection.css";

const SearchSection = ({ searchText, setSearchText }) => {
  return (
    <div className="search-section">
      <div className="search-section-details">
        <img src={cameraHeading} alt="Heading" />
        <p className="search-section-description">Manage your cameras here</p>
      </div>
      <Search searchText={searchText} setSearchText={setSearchText} />
    </div>
  );
};

export default SearchSection;
