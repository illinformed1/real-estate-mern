import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase/index";
import algoliasearch from "algoliasearch";
import SearchItems from "./search-Items-wrapper";
import ListingItem from "./listing-item";

import "./search.css";

import TopSection from "./top-section";
import Listings from "./listings";
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

export default function Home() {
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

  return (
    <div>
      <InstantSearch indexName="listings" searchClient={searchClient}>
        <TopSection />
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
        <Hits hitComponent={SearchItems} />
      </InstantSearch>
      <Listings />
    </div>
  );
}
