import React from "react";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowLeftLeft from "../assets/arrowLeftLeft.svg";
import arrowRightRight from "../assets/arrowRightRight.svg";
import arrowRight from "../assets/arrowRight.svg";
import "../styles/Pagination.css";

const Pagination = ({
  totalItems,
  currentPage,
  totalPages,
  startItem,
  endItem,
  onPageChange,
}) => {
  const handleDropdownChange = (e) => {
    const page = Number(e.target.value);
    onPageChange(page);
  };

  return (
    <div className="pagination-container">
      <select onChange={handleDropdownChange} value={currentPage}>
        {Array.from({ length: totalPages }, (_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>

      <div className="pagination-info" style={{ width: "125px" }}>
        {startItem}-{endItem} of {totalItems}
      </div>

      <div className="pagination-buttons">
        <button onClick={() => onPageChange(1)} disabled={currentPage === 1}>
          <img src={arrowLeftLeft} alt="First Page" />
        </button>

        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <img src={arrowLeft} alt="Previous Page" />
        </button>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <img src={arrowRight} alt="Next Page" />
        </button>

        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          <img src={arrowRightRight} alt="Last Page" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
