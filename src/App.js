import React, { useState, Component } from "react";
import TopSection from "./components/top-section";
import Icons from "./components/icons";
import AgentListing from "./components/agent-listing";
import Listings from "./components/listings";
import Body from "./components/body";
import { BrowserRouter as Router } from "react-router-dom";
import AppProvider from "./components/app-context-provider";

import "./App.css";

function App() {
  return (
    <main className="App">
      <Router>
        <AppProvider>
          <TopSection /> {/* contains search bar*/}
          <Body />
          <Icons />
          <AgentListing />
          <Listings />
        </AppProvider>
      </Router>
    </main>
  );
}

export default App;
