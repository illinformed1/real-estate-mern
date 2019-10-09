import React, { useContext } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import styled from "styled-components";
import firebase from "../firebase/index";
import algoliasearch from "algoliasearch";
import SearchItems from "./search-Items-wrapper";
import ListingCard from "./listings-directory/listing-card";
import Listings from "./listings-directory/listings-page";
import { AppContext } from "./app-context-provider";

import "./search.css";

import TopSection from "./top-section";

import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure
} from "react-instantsearch-dom";
import { Icon } from "semantic-ui-react";

export default function Home() {
  let context = useContext(AppContext);

  let getBedRange = () => {
    let arr = [];
    for (let i = context.bedsMin; i <= context.bedsMax; i++) {
      arr.push(i);
    }
    return arr;
  };

  console.log("bed range", getBedRange());

  console.log("context in home", context.bedsMin);

  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: user => {
        console.log(user);
        //  if (user.additionalUserInfo.isNewUser === true) {
      }
    }
  };

  const searchClient = algoliasearch(
    "24Z7TGX3I3",
    "56f82530ee08fe326a3c2b78344e9c1a"
  );
  console.log("render test");
  return (
    <InstantSearch indexName="listings" searchClient={searchClient}>
      <HomeGrid>
        <TopSection />

        <div style={{ position: "sticky", top: "0", gridArea: "sidebar" }}>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
          <FilterBar>
            <div>
              <div className="item">
                <span>
                  Category
                  <Icon name="caret down" />
                </span>
              </div>
              <div className="item">
                <span>
                  Location
                  <Icon name="caret down" />
                </span>
              </div>
              <div className="item">
                <span>
                  Price
                  <Icon name="caret down" />
                </span>
              </div>
              <div className="item">
                <span>
                  Bed Rooms
                  <Icon name="caret down" />
                </span>
              </div>
              <div className="item">
                <span>
                  Bath Rooms
                  <Icon name="caret down" />
                </span>
              </div>
              <div className="item">
                <span>
                  Car Spaces
                  <Icon name="caret down" />
                </span>
              </div>
            </div>
          </FilterBar>
        </div>

        <div>
          {/* I want to enter my drop down state into here and get back the correct search result  */}

          <RefinementList attribute="Beds" defaultRefinement={getBedRange()} />
          <RefinementList attribute="Baths" />
        </div>

        <div style={{ gridArea: "search" }}>
          <Hits hitComponent={ListingCard} />
          <Pagination />
        </div>
        <div style={{ gridArea: "Listings" }}>
          <Listings />
        </div>
      </HomeGrid>
    </InstantSearch>
  );
}

const HomeGrid = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    " sidebar search ."
    " Listings Listings Listings";
  grid-template-columns: 1fr 1fr 1fr;
  background: #f5f5f5;

  width: 100vw;
`;

const FilterBar = styled.div`
  grid-area: sidebar;
  display: flex;

  align-items: center;
  flex-direction: column;

  .item {
    position: relative;
    border-top: 1px solid black;
    display: flex;
    align-items: center;
    width: 20rem;
    height: 5rem;
  }

  i {
    position: absolute;
    right: 0;
  }
`;
