import React, { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import ListingTypeButtons from "./search-buttons";
import SearchBarInput from "./search-bar-input";
import { InstantSearch } from "react-instantsearch-dom";
import SearchParamsDropdowns from "./search-params-dropdowns";
import { AppContext } from "../app-context-provider";
import algoliasearch from "algoliasearch";

const Search = () => {
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

  const searchClient = algoliasearch(
    "24Z7TGX3I3",
    "56f82530ee08fe326a3c2b78344e9c1a"
  );
  return (
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
        //setSearchResults(filterResults);

        return (
          <div className="search-element">
            {("whats this", searchResults)}
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
};

export default Search;
