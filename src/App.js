import React, { useState, Component } from "react";
import TopSection from "./components/top-section";
import Icons from "./components/icons";
import AgentListing from "./components/agent-listing";
import Listings from "./components/listings";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";
import AppProvider from "./components/app-context-provider";
import CreateListing from "./components/create-listing-directory/create-listing";

function App() {
  return (
    <main className="App">
      <Router>
        <AppProvider>
          {/* contains search bar*/}
          <Main />
        </AppProvider>
      </Router>
    </main>
  );
}

export default App;
