import React, { Fragment, useState, useEffect } from "react";
import { Button, Checkbox, Form, Segment, Step, Icon } from "semantic-ui-react";
import WaitForVerfication from "./wait-for-verification";
import StepBar from "./step-bar";
import SignupForm from "./signup-form";
import KycForm from "./kyc-form";
import { AppContext } from "../app-context-provider";
import { db } from "../../firebase/index";

export default function CreateAccount() {
  const [steps, setSteps] = useState(1);
  const [kycImageArray, setKycImageArray] = useState();

  /* add KYC images to data-base */

  /* needs to be added to a specific user account

/* I have user ID where is the best place to add KYC info*/

  let createNewUser = uid => {
    db.collection("users").doc(uid).set({
      test: 5
    });
  };

  let renderStep = () => {
    switch (steps) {
      case 1:
        return (
          <SignupForm
            createNewUser={createNewUser}
            setSteps={setSteps}
            steps={steps}
          />
        );
      case 2:
        return <KycForm steps={steps} setSteps={setSteps} setKycImageArray={setKycImageArray} />;

        case 3: 
        return <WaitForVerfication steps={steps} setSteps={setSteps}/>

      default:
        return null;
    }
  };

  return (
    <Fragment>
      <AppContext.Consumer>
        {({ test }) => {
          console.log("All hooked up", test);
          return (
            <div>
              <StepBar steps={steps} />
              {renderStep()}
            </div>
          );
        }}
      </AppContext.Consumer>
    </Fragment>
  );
}
