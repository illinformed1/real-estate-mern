import React, { Fragment } from "react";
import { Button, Input } from "semantic-ui-react";

import { Link } from "react-router-dom";

export default function SearchBarInput({
  searchInput,
  setSearchInput,
  filterResults,
  setSearchResultsToListings
}) {
  return (
    <div>
      <div className="search-button-flex">
        <Fragment>
          <Input
            inverted
            value={searchInput}
            onChange={setSearchInput}
            placeholder="Search..."
          />

          <Button onClick={() => filterResults()} inverted color="red">
            Search
          </Button>
        </Fragment>
        )}
      </div>
    </div>
  );
}
