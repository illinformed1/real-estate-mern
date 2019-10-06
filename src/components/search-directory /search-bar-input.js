import React, { Fragment } from "react";
import { Button, Input } from "semantic-ui-react";
import { SearchBox, InstantSearch, Hits } from "react-instantsearch-dom";
import SearchItems from "../search-Items-wrapper";
import algoliasearch from "algoliasearch";

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
          <SearchBox
            inverted
            value={searchInput}
            onChange={setSearchInput}
            placeholder="Search..."
          />
        </Fragment>
        )}
      </div>
    </div>
  );
}
