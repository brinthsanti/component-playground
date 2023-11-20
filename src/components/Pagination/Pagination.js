import "./index.css";
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
      onChange(pageNumber);
      setPage(pageNumber);
  }
  const cc = React.Children.toArray(children).slice(
    page * itemsPerPage - itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="pagination">
      <div className={className}> {cc}</div>
      <div className="controls">
        <button
          disabled={page<=1}
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
          disabled={page>=totalItems/itemsPerPage}
          onClick={() => handleClick(page + 1)}
        >
          <FcNext />
        </button>
      </div>
    </div>
  );
}
