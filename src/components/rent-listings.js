import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import ListingItem from "./listing-item";
import { AppContext } from "./app-context-provider";
import Pagination from "./Pagination";

/* thoughts 

I want to dynamically render either the RentListings or BuyListings page

Ideas... 

setPage

problem is I can't use use effect in a callback. 

so better structure might be, to have a listings page....




get("route.params")


<Listings> + route.params

useEffect((context.state === route.params) => {

},[])

if context.state {
<Rent>
} else context.state {
<Buy>
}




*/

let RentListings = () => {
  return (
    <AppContext.Consumer>
      {({ listings, searchResults, handlePaginationClick, setPage }) => {
        let listingsOrSearch = () =>
          searchResults.length !== 0 ? searchResults : listings;

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
              <Pagination handlePaginationClick={handlePaginationClick} />
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

export default RentListings;
