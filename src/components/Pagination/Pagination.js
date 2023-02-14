import "./index.scss";
import React, { useState } from "react";
import { FcPrevious, FcNext } from "react-icons/fc";

export default function Pagination({
  totalItems,
  itemsPerPage,
  onChange,
  children,
  className
}) {
  const [page, setPage] = useState(1);
  function handleClick(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= totalItems / 10) {
      onChange(pageNumber);
      setPage(pageNumber);
    }
  }
  const cc = React.Children.toArray(children).slice(page * 10 - 10, page * 10);
  return (
    <div className="pagination">
      <div className={className}> {cc}</div>
      <div className="controls">
        <button
          className={page > 1 ? "" : "disabled"}
          onClick={() => handleClick(page - 1)}
        >
          <FcPrevious />
        </button>
        {[...Array(totalItems / itemsPerPage)].map((_, index) => {
          return (
            <button
              className={page === index + 1 ? "active" : ""}
              onClick={() => handleClick(index + 1)}
              key={index}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          className={page < totalItems / 10 ? "" : "disabled"}
          onClick={() => handleClick(page + 1)}
        >
          <FcNext />
        </button>
      </div>
    </div>
  );
}
