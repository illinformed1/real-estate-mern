import React, { Component } from "react";
import { db } from "../firebase/index";

export const AppContext = React.createContext();

export default class AppProvider extends Component {
  state = {
    test: 5,
    searchInput: "",
    setSearchInput: e => this.SearchInput(e),
    listings: [],
    currentPage: 1,
    itemsPerPage: 5,
    searchResults: [],
    filterResults: () => this.filterResults()
  };

  filterResults = () => {
    const { searchInput } = this.state;
    let filtered = this.state.listings.filter(
      listing =>
        listing.City.includes(searchInput) ||
        listing.Province.includes(searchInput)
    );
    this.setState({ seachResults: filtered });
    console.log("Search Results", this.state.seachResults);
  };

  SearchInput = e => {
    this.setState({ searchInput: e.target.value });
    this.filterResults(e.target.value);
  };

  getListings = async () => {
    const { currentPage, itemsPerPage } = this.state;
    const startAt = currentPage * itemsPerPage - itemsPerPage;
    const query = db
      .collection("listings")
      .orderBy("Title") //eventually I want to order by data added + featured listings
      .startAt(startAt)
      .limit(itemsPerPage);
    const snapshot = await query.get();
    const listings = snapshot.docs.map(doc => doc.data());
    return this.setState({ listings });
  };

  componentDidMount() {
    this.getListings();
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
