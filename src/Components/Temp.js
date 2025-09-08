import React, { useState } from "react";

const PaginationExample = () => {
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`); // test with more
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  // Logic for showing only 2 page numbers
  const getPageNumbers = () => {
    let pages = [];

    if (currentPage === 1) {
      pages = [1, 2];
    } else {
      pages = [currentPage - 1, currentPage];
    }

    // Prevent exceeding totalPages
    pages = pages.filter((p) => p <= totalPages);

    return pages;
  };

  return (
    <div className="p-4">
      <h2 className="font-bold text-lg mb-2">Pagination Example</h2>

      {/* Display Items */}
      <ul className="mb-4 list-disc list-inside">
        {currentItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="flex items-center gap-2">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-lg ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white"
          }`}
        >
          Prev
        </button>

        {/* Page Numbers */}
        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => handleClick(page)}
            className={`px-3 py-1 rounded-lg ${
              page === currentPage
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Show dots if not at the end */}
        {getPageNumbers().slice(-1)[0] < totalPages && (
          <span className="px-2">...</span>
        )}

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationExample;
