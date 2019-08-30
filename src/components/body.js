import React from "react";
import { Route, Link } from "react-router-dom";
import listings from "./listings";
import home from "./home-component";

export default function Body() {
  return (
    <div>
      <Route path="/" exact component={home} />
      <Route path="/listings" component={listings} />
    </div>
  );
}
