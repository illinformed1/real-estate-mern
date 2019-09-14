import React from "react";
import { Button, Checkbox, Form, Segment, Step, Icon } from "semantic-ui-react";

import styled from "styled-components";

export default function StepBar({ steps }) {
  return (
    <div>
      <StepStyle>
        <Step.Group>
          <Step
            completed={steps > 1 ? true : false}
            active={steps === 1 ? true : false}
          >
            <Icon name="user outline" />
            <Step.Content>
              <Step.Title>Create Account</Step.Title>
              <Step.Description>Choose an Email & Password</Step.Description>
            </Step.Content>
          </Step>

          <Step
            completed={steps > 2 ? true : false}
            active={steps === 2 ? true : false}
          >
            <Icon name="upload" />
            <Step.Content>
              <Step.Title>Confirm Identity</Step.Title>
              <Step.Description>Upload ID Documents</Step.Description>
            </Step.Content>
          </Step>

          <Step
            completed={steps > 3 ? true : false}
            active={steps === 3 ? true : false}
          >
            <Icon name="info" />
            <Step.Content>
              <Step.Title>Wait For Verification</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
      </StepStyle>
    </div>
  );
}

const StepStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
