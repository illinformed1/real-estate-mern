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
    handlePaginationClick: selection => this.handlePaginationClick(selection),
    itemsPerPage: 5,
    searchResults: [],
    filterResults: () => this.filterResults()
  };

  handlePaginationClick = selection => {
    switch (selection) {
      case "previous":
        this.setState(prev => ({ currentPage: prev.currentPage - 1 }));

        break;
      case "next":
        this.setState(prev => ({ currentPage: prev.currentPage + 1 }));

        break;
      default:
        this.setState({ currentPage: selection });
    }
  };

  /* the problem is that when try to paginate dynamically, I am getting the full list of blahs 
 when I want the length of the list of blahs, but, I would rather not return all documents because it is expensive.  */

  filterResults = () => {
    const { searchInput } = this.state;
    let filtered = this.state.listings.filter(
      listing =>
        listing.City.includes(searchInput) ||
        listing.Province.includes(searchInput)
    );
    this.setState({ seachResults: filtered });
  };

  SearchInput = e => {
    this.setState({ searchInput: e.target.value });
    this.filterResults(e.target.value);
  };

  getListings = async () => {
    const { currentPage, itemsPerPage } = this.state;
    const startAt = currentPage * itemsPerPage - itemsPerPage;
    const query = db
      .collection("real-estate")
      .doc("listings")
      .collection("rent") //later pass route-params into functions to render either the rent or buy listings
      .orderBy("Num")
      .startAt(startAt)
      .limit(itemsPerPage);
    const snapshot = await query.get();
    const listings = snapshot.docs.map(doc => doc.data());
    return this.setState({ listings });
  };

  /* As far as I can tell this is correct. The problem seems to be that create listing has the old data*/

  componentDidMount() {
    this.getListings();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentPage != prevState.currentPage) {
      this.getListings();
    }

    console.log("prevState", prevState.listings);
    console.log("currentState", this.state.listings);
  }

  render() {
    console.log("currentPage in render", this.state.currentPage);
    console.log("listings in render", this.state.listings);
    console.log("Documents in database", this.state.documentsInDB);
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
