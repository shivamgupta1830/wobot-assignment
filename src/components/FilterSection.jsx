import React from "react";
import locationIcon from "../assets/locationIcon.svg";
import rssFeed from "../assets/rssFeed.svg";
import "../styles/FilterSection.css";

const FilterSection = ({
  locationOptions,
  statusOptions,
  locationFilter,
  statusFilter,
  setLocationFilter,
  setStatusFilter,
}) => {
  return (
    <div className="filter-section">
      <div className="filter-section-box">
        <img src={locationIcon} alt="Location Icon" style={{ width: "24px" }} />

        {/* Location Filter */}

        <select
          onChange={(e) => setLocationFilter(e.target.value)}
          value={locationFilter}
        >
          <option value="">Location</option>
          {locationOptions.map((location) => (
            <option value={location} key={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      {/* Status Filter */}

      <div className="filter-section-box">
        <img src={rssFeed} alt="Status Icon" style={{ width: "24px" }} />
        <select
          onChange={(e) => setStatusFilter(e.target.value)}
          value={statusFilter}
        >
          <option value="">Status</option>
          {statusOptions.map((status) => (
            <option value={status} key={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterSection;
