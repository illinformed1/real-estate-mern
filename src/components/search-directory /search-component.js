import React, { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import ListingTypeButtons from "./listing-type-buttons";
import SearchBarInput from "./search-bar-input";
import SearchParamsDropdowns from "./search-params-dropdowns";
import { AppContext } from "../app-context-provider";

const Search = () => (
  /* First I need the user search input

this is going to be an object that contains the words they are searching from 

break a sentence down into words and search the title, city, tagline properties for a match
filter according to presets


other: 

if nothing is entered return all and filter presets 



steps 1 = get the listing objects 

step 2 = save a user search object

step 3 = handle a search event

*/

  <AppContext.Consumer>
    {({
      listings,
      searchInput,
      setSearchInput,
      searchResults,
      setSearchResults,
      filterResults,
      setSearchResultsToListings
    }) => {
      console.log(searchInput);
      console.log("listings", listings);
      console.log("what am i", filterResults);

      //setSearchResults(filterResults);

      return (
        <div className="search-element">
          {console.log("whats this", searchResults)}
          <Segment inverted className="section">
            <ListingTypeButtons />
            <SearchBarInput
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              filterResults={filterResults}
              setSearchResultsToListings={setSearchResultsToListings}
            />
            <SearchParamsDropdowns />
          </Segment>
        </div>
      );
    }}
  </AppContext.Consumer>
);

export default Search;
