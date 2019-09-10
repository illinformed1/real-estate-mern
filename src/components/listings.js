import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import ListingItem from "./listing-item";
import { AppContext } from "./app-context-provider";
import Pagination from "./Pagination";

let Listings = () => {
  const [pageNum, setPageNum] = useState(1);
  const itemsPerPage = 3;

  // steps

  // lastIndex 3 * 1 = 3
  // firstIndex 3 - 3 = 0

  //lastIndex 3 * 2 = 6
  //first Index 6 - 3 = 3 - 1 is correct

  let lastIndex = itemsPerPage * pageNum;
  let firstIndex = () => {
    if (pageNum > 1) {
      return lastIndex - itemsPerPage - 1;
    }
  };

  return (
    <AppContext.Consumer>
      {({ listings, searchResults }) => {
        let listingsOrSearch = () =>
          searchResults.length !== 0 ? searchResults : listings;

        /* const paginatedListings = listingsOrSearch()
        
        .slice(
          firstIndex(),
          lastIndex
        );
*/

        console.log(listings);
        return (
          <Fragment>
            <ListingGridStyle>
              {listingsOrSearch().map((listing, index) => (
                <ListingItem
                  key={index}
                  tagline={listing.Tagline}
                  id={listing.ID}
                  price={listing.Price}
                  title={listing.Title}
                  city={listing.City}
                  province={listing.Province}
                  beds={listing.Beds}
                  baths={listing.Baths}
                  description={listing.Description}
                  image={listing.ImageURLArray}
                />
              ))}
              <Pagination setPageNum={setPageNum} pageNum={pageNum} />
            </ListingGridStyle>
          </Fragment>
        );
      }}
    </AppContext.Consumer>
  );
};

const ListingGridStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #ededed;
`;

export default Listings;
