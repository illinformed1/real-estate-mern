import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import ListingItem from "./listing-item";
import axios from "axios";
import TopSection from "./top-section";

export default function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    async function getData() {
      axios
        .get("http://localhost:4000/realestate/listings")
        .then(res => setListings(res.data));
    }
    getData();
  }, []);

  return (
    <Fragment>
      <TopSection />
      <ListingGridStyle>
        {listings.map((listing, index) => (
          <ListingItem
            key={index}
            price={listing.price}
            title={listing.title}
            location={listing.location}
            description={listing.description}
            image={listing.image}
          />
        ))}
      </ListingGridStyle>
    </Fragment>
  );
}

const ListingGridStyle = styled.div`
  width: 100%;
  justify-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
