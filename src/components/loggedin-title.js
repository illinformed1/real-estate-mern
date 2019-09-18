import React from "react";
import { ClipLoader } from "react-spinners";

export default function LoggedInTitle({ loggedInUser }) {
  return (
    <div>
      <h1>
        Welcome{" "}
        {loggedInUser.displayName ? (
          loggedInUser.displayName
            .toLowerCase()
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ")
        ) : (
          <span>
            <ClipLoader sizeUnit={"px"} size={50} color={"#123abc"} />
          </span>
        )}{" "}
        You Are Signed In
      </h1>
    </div>
  );
}
