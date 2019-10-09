import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import ListingItem from "./listing-card";
import { AppContext } from "../app-context-provider";
import Pagination from "../Pagination";

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

let ListingsPage = () => {
  return (
    <AppContext.Consumer>
      {({ listings, handlePaginationClick, setPage }) => {
        console.log("why no listings", listings);
        return (
          <Fragment>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100vw",
                justifyContent: "space-evenly"
              }}
            >
              {listings.map((listing, index) => (
                <ListingItem
                  key={index}
                  Tagline={listing.Tagline}
                  ID={listing.ID}
                  Price={listing.Price}
                  Title={listing.Title}
                  City={listing.City}
                  Province={listing.Province}
                  Beds={listing.Beds}
                  Baths={listing.Baths}
                  Description={listing.Description}
                  ImageURLArray={listing.ImageURLArray}
                />
              ))}
            </div>
            <Pagination handlePaginationClick={handlePaginationClick} />
          </Fragment>
        );
      }}
    </AppContext.Consumer>
  );
};

export default ListingsPage;
