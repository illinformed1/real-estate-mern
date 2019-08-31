import React, { Fragment, useState, useEffect } from "react";
import { Button, Checkbox, Form, Segment, Step, Icon } from "semantic-ui-react";
import styled from "styled-components";
import StepBar from "./step-bar";
import SignupForm from "./signup-form";
import KycForm from "./kyc-form";
import firebase from "../../firebase/index";

export default function CreateAccount() {
  const [steps, setSteps] = useState(1);
  const [code, setCode] = useState("");
  const [verificationID, setVerificationID] = useState("");
  const [phoneVerified, setPhoneVerified] = useState(false);

  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible"
        // other options
      }
    );
  }, []);

  let generateVerification = e => {
    e.preventDefault();
    const phoneNumber = "+61424988746";
    const applicationVerifier = window.recaptchaVerifier;

    var provider = new firebase.auth.PhoneAuthProvider();
    provider
      .verifyPhoneNumber(phoneNumber, applicationVerifier)
      .then(function(verificationId) {
        setVerificationID(verificationId);
      });
  };

  let phoneConfirmation = () => {
    firebase.auth.PhoneAuthProvider.credential(verificationID, code)
      .then(function(phoneCredential) {
        return firebase.auth().signInWithCredential(phoneCredential);
      })
      .then(steps + 1);
  };

  let handleSubmit = (e, email, password) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        console.log(error);
      });
    if (phoneVerified === true) {
      setSteps(Step + 1);
    } else {
      console.log("phone not verified");
    }
  };

  let renderStep = () => {
    switch (steps) {
      case 1:
        return (
          <SignupForm
            setCode={setCode}
            handleSubmit={handleSubmit}
            generateVerification={generateVerification}
            phoneConfirmation={phoneConfirmation}
          />
        );
      case 2:
        return <KycForm />;
    }
  };

  return (
    <Fragment>
      <StepBar steps={steps} />
      {renderStep()}
      {/**/}
    </Fragment>
  );
}
