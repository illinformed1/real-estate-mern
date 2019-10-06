import React, { useState, useContext, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Listings from "./listings";
import { AppContext } from "./app-context-provider";
import firebase from "../firebase/index";
import axios from "axios";
import Home from "./home-component";
import Profile from "./signed-in-home";
import CreateAccount from "./create-account-directory/create-account";
import CreateListing from "./create-listing-directory/create-listing";
import ShareComponent from "./share-directory/share-component";
import IndividualListing from "./individual-listing";

/* Difference between SignedIn and SignedUp */

export default function Main() {
  let context = useContext(AppContext);
  const { setLoggedInUser, userConfirmed } = context;
  const [signedIn, setSignedIn] = useState(false);

  console.log(context);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("signed in", user);
      setSignedIn(true);
    } else {
      console.log("not signed in", user);
      setSignedIn(false);
    }
  });

  useEffect(() => {
    if (firebase.auth().currentUser) {
      let user = firebase.auth().currentUser;
      setLoggedInUser(user);
    }
  }, [signedIn]);

  return (
    <div>
      <Route path="/" exact component={signedIn ? Profile : Home} />
      <Route path="/listings/:type" component={Listings} />
      <Route
        path="/create-account"
        component={signedIn ? Profile : CreateAccount}
      />
      <Route
        path="/createlisting"
        component={signedIn && userConfirmed ? CreateListing : CreateAccount}
      />
      <Route path="/share" component={ShareComponent} />
      <Route path="/listing-item/:id" component={IndividualListing} />
    </div>
  );
}
