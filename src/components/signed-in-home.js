import React, { useState, useContext, useEffect } from "react";
import firebase, { db } from "../firebase/index";
import styled from "styled-components";
import UserBio from "./user-bio";

import LoggedInTitle from "./loggedin-title";
import UserListingsSlider from "./user-listings-slider";
import SideBar from "./side-bar";
import { Button, Icon } from "semantic-ui-react";
import { AppContext } from "./app-context-provider";

export default function SignedInHome() {
  let context = useContext(AppContext);
  const { loggedInUser } = context;
  const [loading, setLoading] = useState(true);

  const [userListings, setUserListings] = useState([]);

  useEffect(() => {
    console.log("logged in user in Effect", loggedInUser);
    let getUserListings = async () => {
      const query = db
        .collection("users")
        .doc(loggedInUser.uid)
        .collection("listings");
      let snapshot = await query.get();
      let listings = snapshot.docs.map(doc => doc.data());
      setUserListings(listings);
    };

    if (loggedInUser) {
      getUserListings();
      setLoading(false);
    }
  }, [loggedInUser]);

  let signOut = () => {
    return firebase.auth().signOut();
  };

  console.log("whats in here", loggedInUser);

  if (!userListings) {
    return <h1>loading...</h1>;
  } else {
    return (
      <div>
        <SideBar />
        <DashBoardStyle>
          <Button
            className="sign-out-btn"
            color="red"
            onClick={() => signOut()}
          >
            Sign out
          </Button>
          <UserBio loggedInUser={loggedInUser} />

          <UserListingsSlider userListings={userListings} />
        </DashBoardStyle>
      </div>
    );
  }
}

const DashBoardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-size: contain;
  width: 100vw;
  height: 100vh;
  background: #ededed;

  .sign-out-btn {
    position: absolute;
    right: 2rem;
    top: 2rem;
  }
`;
