import React from "react";

const Pagination = ({ paginate, currentPage, totalPages, handlePageClick }) => {
  return (
    <div>
      <nav className="flex justify-between items-center space-y-3 md:space-y-0 p-4">
        <span className="text-sm text-gray-500">
          Showing{" "}
          <span className="font-semibold">
            {(currentPage - 1) * paginate.limit + 1} -{" "}
            {Math.min(currentPage * paginate.limit, paginate.count)}
          </span>{" "}
          of <span className="font-semibold">{paginate.count}</span>
        </span>

        <ul className="inline-flex items-center -space-x-px">
          <li>
            <button
              onClick={() => handlePageClick(currentPage - 1)}
              disabled={currentPage === 1}
              className={`py-2 px-3 border ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Previous
            </button>
          </li>
          {paginate.pages.map((page) => (
            <li key={page}>
              <button
                onClick={() => handlePageClick(page)}
                className={`py-2 px-3 border ${
                  page === currentPage ? "bg-blue-500 text-white" : ""
                }`}
              >
                {page}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handlePageClick(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`py-2 px-3 border ${
                currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
