import React, { useEffect, useState } from "react";
import { db } from "../firebase/index";
import { async } from "q";
/* Next problem 

I want to dynamical display x many pages. Problem is, to do this I need to map through the listings. 


*/

export default function Pagination({ handlePaginationClick }) {
  const [loading, setLoading] = useState(true);
  const [numItemsInDB, setNumItemsInDB] = useState(0);

  /* Dynamic pagination...

if loading maybe display a circle wheel or something

ideas...

take the num in database from --stats--
numitems / itemsperpage = pages

*/

  useEffect(() => {
    let getListingNum = () =>
      db
        .collection("real-estate")
        .doc("--stats--")
        .get()
        .then(snapshot => setNumItemsInDB(snapshot.data().rentDocs));
    getListingNum();
    setLoading(false);
  }, []);

  let arrayCreator = () => {
    if (loading === false) {
      let array = [];
      for (let i = 1; i <= Math.ceil(numItemsInDB / 5); i++) {
        array.push(i);
      }
      return array;
    } else return [];
  };

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
          {arrayCreator().map(i => (
            <li className="page-item">
              <span
                className="page-link"
                onClick={() => handlePaginationClick(i)}
              >
                {i}
              </span>
            </li>
          ))}
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
