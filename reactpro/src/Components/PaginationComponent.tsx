import React, { useState } from 'react';
import "../assets/NewCss/PaginationComponent.css"

function PaginationDemo() {
  const dummyData = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`); 
  const itemsPerPage = 5;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dummyData.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = dummyData.slice(startIdx, startIdx + itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <ul>
        {currentItems.map((item, idx) => (
          <li key={idx} style={{ marginBottom: '5px' }}>{item}</li>
        ))}
      </ul>

      <div className="pagination-container">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handleClick(i + 1)}
            className={`pagination-button ${currentPage === i + 1 ? 'pagination-button-active' : 'pagination-button-inactive'}`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginationDemo;
