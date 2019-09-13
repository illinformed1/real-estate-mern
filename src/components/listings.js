import React, { useState, useEffect, Fragment } from "react";

import { AppContext } from "./app-context-provider";
import RentListings from "./rent-listings";
import BuyListings from "./buy-listings";

class Listings extends React.Component {
  componentDidMount() {
    if (this.props.match === undefined) {
      return null;
    } else if (
      this.props.match.params.type === "rent" ||
      this.props.match.params.type === "buy"
    ) {
      console.log(this.props.match.params.type);
      let { setPage } = this.context;
      setPage(this.props.match.params.type);
    } else {
      throw new Error("page does not exist");
    }
  }

  render() {
    return (
      <AppContext.Consumer>
        {({ page }) => {
          if (page === "rent") {
            return <RentListings />;
          } else if (page === "buy") {
            return <BuyListings />;
          } else {
            return <h1>Page not found</h1>;
          }
        }}
      </AppContext.Consumer>
    );
  }
}
Listings.contextType = AppContext;

export default Listings;
