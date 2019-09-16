import React from "react";
import styled from "styled-components";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../../firebase/index";
import { AppContext } from "../app-context-provider";

export default function SignupForm({ setSteps, steps, createNewUser }) {
  return (
    <AppContext.Consumer>
      {({ setLoggedInUser }) => {
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
                createNewUser(user.user.uid);
                setLoggedInUser(user.user.uid);
                setSteps(steps + 1)
             // } else {
               // setLoggedInUser(user.user.uid);
             //   setSteps(steps + 1)
              //}
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
      }}
    </AppContext.Consumer>
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
