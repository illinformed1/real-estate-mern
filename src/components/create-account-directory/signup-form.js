import React, { useState } from "react";
import styled from "styled-components";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../../firebase/index";

export default function SignupForm({ setSteps, steps, createNewUser }) {
  const [email, setEmail] = useState("");

  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/signedIn",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: user => {
        console.log(user);
        if (user.additionalUserInfo.isNewUser === true) {
          createNewUser(user.user.uid);
        }
      }
    }
  };

  return (
    <FormStyling>
      <div className="border border-info p-5 sign-in">
        <h3>To List A Property On Our Platform </h3>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />

        <p>
          by creating an account you agree to all our{" "}
          <a href="#">terms and condition</a> and our{" "}
          <a href="#">privacy policiy</a>{" "}
        </p>
      </div>
    </FormStyling>
  );
}

const FormStyling = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100vh;
  background: #141618;
  color: white;
  align-items: center;

  .sign-in {
    background: linear-gradient(#09476f, #2e8c8a);
  }
  h3 {
    text-align: center;
  }
  h2 {
    margin-bottom: 3rem;
    text-align: center;
  }

  .border {
    border-width: 5px !important;
  }
`;
