import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase/index";
import axios from "axios";
import TopSection from "./top-section";
import Listings from "./listings";

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





  
  
  return (
    <div>
      <TopSection />
      <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
              />


      <Listings />
    </div>
  );
}
