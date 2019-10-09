import React from "react";
import image from "./top-image.jpg";
import Search from "./search-directory /search-component";
import styled from "styled-components";

export default function TopSection() {
  return (
    <div
      style={{
        gridArea: "header",
        backgroundImage: `url(${image})`,
        width: "100%",
        height: "60vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative"
      }}
    >
      <SearchStyle>
        <Search />
      </SearchStyle>
    </div>
  );
}

const SearchStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  top: 25vh;

  .ui.inverted.segment {
    width: 50vw;
  }

  .section {
    display: flex;
    flex-direction: column;

    .search-button-flex {
      display: flex;
      justify-content: space-between;

      button {
        margin: 0 0 0 0.2rem;
      }

      .ui.input {
        flex-grow: 1;
        display: flex;
        align-items: center;

        input {
          height: min-content;
        }
      }
    }

    button {
      margin: 1rem 0.3rem 0.5rem;
    }
  }
`;
