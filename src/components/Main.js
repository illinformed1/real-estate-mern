import React from "react";
import { Route, Link } from "react-router-dom";
import listings from "./listings";
import home from "./home-component";
import CreateAccount from "./create-account-directory/create-account";
import CreateListing from "./create-listing-directory/create-listing";

export default function Main() {
  return (
    <div>
      <Route path="/" exact component={home} />
      <Route path="/listings" component={listings} />
      <Route path="/create" component={CreateAccount} />
      <Route path="/createlisting" component={CreateListing} />
    </div>
  );
}
