import React from "react";
import styled from "styled-components";
import { Input, Segment } from "semantic-ui-react";

export default function SharingSearch() {
  return (
    <div>
      <SearchBarStyled>
        <div className="segment-wrapper">
          <Segment inverted>
            <span className="logo-bar-wrapper">
              {" "}
              <h2>House Sharing</h2>
              <Input />
            </span>
          </Segment>
        </div>
      </SearchBarStyled>
    </div>
  );
}

const SearchBarStyled = styled.div`
  display: flex;

  h2 {
    color: #3ac0ff;
  }

  justify-content: center;
  .segment-wrapper {
    opacity: 0.8;
    width: 100vw;

    input {
      margin-left: 50%;
      width: 40vw;
    }

    .logo-bar-wrapper {
      display: flex;
    }
  }
`;
