import React, { useContext, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import styled from "styled-components";
import firebase from "../firebase/index";
import algoliasearch from "algoliasearch";
import SearchItems from "./search-Items-wrapper";
import ListingCard from "./listings-directory/listing-card";
import Listings from "./listings-directory/listings-page";
import { AppContext } from "./app-context-provider";
import { Dropdown, Input, Button } from 'semantic-ui-react'
import {numberDropHandler, priceDropHandler} from "./utils";


import "./search.css";

import TopSection from "./top-section";

import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure
} from "react-instantsearch-dom";
import { Icon } from "semantic-ui-react";

export default function Home() {
  let context = useContext(AppContext);

  let getBedRange = () => {
    let arr = [];
    for (let i = context.bedsMin; i <= context.bedsMax; i++) {
      arr.push(i);
    }
    return arr;
  };


  const [beds, setBed] = useState([])
  const [baths, setBath] = useState([])
  const [priceMin, setPriceMin] = useState()
  const [priceMax, setPriceMax] = useState()
  console.log("bed range", getBedRange());

  console.log("context in home", context.bedsMin);

  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: user => {
        console.log(user);
        //  if (user.additionalUserInfo.isNewUser === true) {
      }
    }
  };

  const searchClient = algoliasearch(
    "24Z7TGX3I3",
    "56f82530ee08fe326a3c2b78344e9c1a"
  );
  console.log("render test");
  return (
    <React.Fragment>
    
    <InstantSearch indexName="listings" searchClient={searchClient}>
    <TopSection />
      <HomeGrid>
       
        
        
        <div>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
          
          <FilterBar>
            <div>
              <div className="item">
                <span>
                  Category
                  <Icon name="caret down" />
                </span>
              </div>
              <div className="item">
                <span>
                  Location
                  <Icon name="caret down" />
                </span>
              </div>
              <div className="item">
                <span>
                <Dropdown 
                color="black"
    placeholder='Number Of Bathrooms'
    fluid
    multiple
    onChange={(e) => setBath(numberDropHandler(baths, e.target.textContent))}
    selection
    options={[{key: 1, text:"1", value:1}, {key: 2, text:"2", value:2}, {key: 3, text:"3", value:3}]}
  />
                </span>
              </div>
              <div className="price-item">
                <span>
                    <Input 
                      onChange={(e) => setPriceMin(e.target.textContent)}
                      placeholder = "Min"
                    />

                    <Input 
                      onChange={(e) => setPriceMax(e.target.textContent)}
                      placeholder = "Max"
                    />
                
               
                <Button onClick={() => priceDropHandler(priceMin, priceMax)}color='orange' content="Filter" />
                </span>
                  </div>
              <div className="item">
                <span>
                <Dropdown 
                color="black"
    placeholder='Number Of Bathrooms'
    fluid
    multiple
    onChange={(e) => setBath(numberDropHandler(baths, e.target.textContent))}
    selection
    options={[{key: 1, text:"1", value:1}, {key: 2, text:"2", value:2}, {key: 3, text:"3", value:3}]}
  />
                </span>
              </div>
              <div className="item">
                <span>
                  Car Spaces
                  <Icon name="caret down" />
                </span>
              </div>
            </div>
          </FilterBar>
        </div>

        {console.log("what is the beds", beds)}
        

        <div>
          {/* Warning!!! Dirty Hack. Invisible Refinements That Are Controlled By The Dropdown
          
          Okay, now I have an average price that I can use to group the blahs. So Now for each one I just need to put every thousand difference into the blah. 

          */}

          <RefinementList attribute="Beds" defaultRefinement={beds} ></RefinementList>
          <RefinementList attribute="Baths" defaultRefinement={baths}></RefinementList>
          <RefinementList attribute="AveragePrice"></RefinementList>
          
        </div>
    

        <div style={{ gridArea: "search" }}>
          <Hits hitComponent={ListingCard} />
          <Pagination />
        </div>
       
        </HomeGrid>
        </InstantSearch>
        
          <Listings />
        
      </React.Fragment>
    
  );
}

const HomeGrid = styled.div`
  display: flex;
  width:100vw;
  justify-content: space-around;
  
  
`;

const ScrollingSection = styled.div`
background:blue;
height: 50rem;
`

const FilterBar = styled.div`
  grid-area: sidebar;
  display: flex;
  position: sticky;
  top: 0;
  
  gridArea: sidebar;

  
  flex-direction: column;

  .item {
    position: relative;
    border-top: 1px solid black;
    display: flex;
    
    align-items: center;
    width: 20rem;
    height: 7rem;
    
  }

  .price-item {
    position: relative;
    border-top: 1px solid black;
    display: flex;
    
    align-items: center;
    width: 20rem;
    height: 9rem;
  }

  i {
    position: absolute;
    right: 0;
  }
`;
