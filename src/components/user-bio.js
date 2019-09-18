import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { Rating } from "semantic-ui-react";

export default function UserBio({ loggedInUser }) {
  const [toggle, setToggle] = useState(false);

  const fadeIn = useSpring({
    opacity: toggle ? "1" : "0"
  });

  return (
    <div>
      <BioStyled>
        <div className="top-row">
          <img src={`${loggedInUser.photoURL}`} />
          <h1 className="account-name">
            {loggedInUser.displayName ? (
              loggedInUser.displayName
                .toLowerCase()
                .split(" ")
                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                .join(" ")
            ) : (
              <span></span>
            )}{" "}
          </h1>
          <div>
            <Rating icon="star" defaultRating={3} maxRating={4} />
          </div>
        </div>
        <main
          onMouseEnter={() => setToggle(!toggle)}
          onMouseLeave={() => setToggle(!toggle)}
        >
          <h3>User Bio</h3>
          <h4>
            Write a little something about yourself here to build buyer/seller
            trust
            <animated.div className="icon-wrapper" style={fadeIn}>
              <Icon name="pencil alternate" />
            </animated.div>
          </h4>
        </main>
      </BioStyled>
    </div>
  );
}

const BioStyled = styled.div`
  width: 40rem;
  height: 40rem;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  .top-row {
    display: flex;
    border-bottom: 1px solid grey;
    width: 80%;
    height: min-content;
  }

  img {
    margin: 2rem;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
  }

  main {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 1rem;
    border: 2px solid white;
    cursor: pointer;
    transition: all 1s;

    &:hover {
      border: 2px solid lightgreen;
    }

    .icon-wrapper {
      display: flex;

      height: 100%;
      justify-content: center;
      align-items: center;
      font-size: 5rem;
      color: lightgreen;
    }
  }

  .account-name {
    margin: 2rem;
  }
`;
