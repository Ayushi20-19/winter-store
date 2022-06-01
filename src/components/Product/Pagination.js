import React from "react";
import { useState } from "react";
import "./Css/pagination.css";
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  const [isActive, setIsActive] = useState(1);
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <button
              onClick={() => {
                paginate(number);
                setIsActive(number);
              }}
              className={
                isActive === number ? "active-num page-link" : "page-link"
              }>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
