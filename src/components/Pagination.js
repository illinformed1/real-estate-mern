import React from "react";
/* Next problem 

I want to dynamical display x many pages. Problem is, to do this I need to map through the listings. 


*/

export default function Pagination({ handlePaginationClick }) {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <span
              class="page-link"
              onClick={() => handlePaginationClick("previous")}
            >
              Previous
            </span>
          </li>
          <li class="page-item">
            <span class="page-link" onClick={() => handlePaginationClick(1)}>
              1
            </span>
          </li>
          <li class="page-item">
            <span class="page-link">2</span>
          </li>
          <li class="page-item">
            <span class="page-link">3</span>
          </li>
          <li class="page-item">
            <span
              class="page-link"
              onClick={() => handlePaginationClick("next")}
            >
              Next
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
