import React from "react";

export default function Pagination({ setPageNum, pageNum }) {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <span class="page-link" onClick={() => setPageNum(pageNum - 1)}>
              Previous
            </span>
          </li>
          <li class="page-item">
            <span class="page-link" onClick={() => setPageNum(1)}>
              1
            </span>
          </li>
          <li class="page-item">
            <span class="page-link" onClick={() => setPageNum(2)}>
              2
            </span>
          </li>
          <li class="page-item">
            <span class="page-link" onClick={() => setPageNum(3)}>
              3
            </span>
          </li>
          <li class="page-item">
            <span class="page-link" onClick={() => setPageNum(pageNum + 1)}>
              Next
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
