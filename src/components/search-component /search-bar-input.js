import React, { Fragment } from "react";
import { Button, Input } from "semantic-ui-react";
import { AppContext } from "../app-context-provider";
import { Link } from "react-router-dom";

export default function SearchBarInput() {
  return (
    <div>
      <div className="search-button-flex">
        <AppContext.Consumer>
          {({ searchInput, setSearchInput }) => (
            <Fragment>
              <Input
                inverted
                value={searchInput}
                onChange={setSearchInput}
                placeholder="Search..."
              />
              <Link to="/listings">
                <Button inverted color="red">
                  Search
                </Button>
              </Link>
            </Fragment>
          )}
        </AppContext.Consumer>
      </div>
    </div>
  );
}
