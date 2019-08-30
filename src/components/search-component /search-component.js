import React from "react";
import { Segment } from "semantic-ui-react";
import ListingTypeButtons from "./listing-type-buttons";
import SearchBarInput from "./search-bar-input";
import SearchParamsDropdowns from "./search-params-dropdowns";

const Search = () => (
  <div className="search-element">
    <Segment inverted className="section">
      <ListingTypeButtons />
      <SearchBarInput />
      <SearchParamsDropdowns />
    </Segment>
  </div>
);

export default Search;
