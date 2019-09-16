import React, { useState } from "react";
import firebase from "../firebase/index";
import styled from "styled-components";

export default function SignedInHome() {
  const [userInfo, setUserInfo] = useState({});

  let signOut = () => {
    return firebase.auth().signOut();
  };

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("signed in", user);
      setUserInfo(user);
    } else {
      console.log("not signed in", user);
      setUserInfo(user);
    }
  });

  console.log(userInfo);

  return (
    <div>
      <h1>
        Welcome{" "}
        {userInfo.displayName ? (
          userInfo.displayName
            .toLowerCase()
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ")
        ) : (
          <h3>loading</h3>
        )}{" "}
        You Are Signed In
      </h1>
      <button onClick={() => signOut()}>Sign out</button>

      <DashBoardStyle>
        <div className="add a listing">add a listing</div>
        <div className="check on listings">check on listings</div>
        <div className="run a promotion">run a promotion</div>
        <div className="update profile">update profile</div>
      </DashBoardStyle>
    </div>
  );
}

const DashBoardStyle = styled.div``;
