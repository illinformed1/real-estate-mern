import React, {useState} from "react";
import { Route, Link } from "react-router-dom";
import Listings from "./listings";
import firebase from "../firebase/index"
import Home from "./home-component";
import SignedInHome from "./signed-in-home";
import CreateAccount from "./create-account-directory/create-account";
import CreateListing from "./create-listing-directory/create-listing";
import ShareComponent from "./share-directory/share-component";
import IndividualListing from "./individual-listing";

export default function Main() {

  const [signedIn, setSignedIn] = useState(true);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("signed in", user)
      setSignedIn(true)
    } else {
      console.log("not signed in", user)
      setSignedIn(false)
    }
  });


  return (
    <div>
      <Route path="/" exact component={(signedIn) ? SignedInHome: Home } />
      <Route path="/listings/:type" component={Listings} />

      <Route path="/create" component={CreateAccount} />
      <Route path="/createlisting" component={CreateListing} />
      <Route path="/share" component={ShareComponent} />
      <Route path="/listing-item/:id" component={IndividualListing} />
    </div>
  );
}
