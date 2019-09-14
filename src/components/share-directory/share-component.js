import React, { Fragment } from "react";
import styled from "styled-components";
import { Icon, Dropdown, Radio, Segment, Input } from "semantic-ui-react";
import SearchSharing from "./sharing-search.js";

const sharingOptions = [
  { key: "house", value: "house", text: "house" },
  {
    key: "appartment/condo",
    value: "appartment/condo ",
    text: "appartment/condo"
  },
  { key: "Dorm/bedspace", value: "Dorm/bedspace", text: "Dorm/bedspace" }
];

/* 

I want to account for different types of sharing 

roomOptions 

sharingOptions 








*/

export default function ShareComponent() {
  return (
    <Fragment>
      <SharedStyled>
        <SearchSharing />
        <div className="top-section">
          <Segment color="blue">
            <Dropdown
              placeholder="Skills"
              fluid
              multiple
              selection
              options={sharingOptions}
            />
            <Radio label="Male" />
            <Radio label="Female" />
            <Radio label="Mixed" />
            <div>
              <label style={{ marginRight: "1rem" }}>Couple friendly</label>
              <label>no</label>
              <Radio toggle />
              <label>yes</label>
            </div>
            <p>Price</p>
            <Input placeholder="universtiy" />
            <p>Location</p>
            <Dropdown />
          </Segment>

          <div className="right-col">
            <div className="background" />
          </div>
        </div>
        <div className="icon-row">
          <div className="icon">
            <Icon name="university" />
            <p>Live closer to university / work</p>
          </div>
          <div className="icon">
            <Icon name="id card outline" />
            <p>Carefully vet your roommates</p>
          </div>
          <div className="icon">
            <Icon name="money" />
            <p>Live cheapers</p>
          </div>
          <div className="icon">
            <Icon name="student" />
            <p>Find the right study environment</p>
          </div>
        </div>
      </SharedStyled>
    </Fragment>
  );
}

const SharedStyled = styled.div`
  .top-section {
    width: 100vw;
    height: 80vh;
    display: grid;
    grid-template-columns: 1fr 3fr;

    .background {
      height: 100%;
      width: 100%;
      background: url("/background-share.jpg");
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
    .right-col {
    }
  }
  .icon-row {
    display: flex;
    width: 100vw;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .icon {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 4rem;

    p {
      font-size: 2rem;
      margin-top: 2rem;
    }
  }
`;
