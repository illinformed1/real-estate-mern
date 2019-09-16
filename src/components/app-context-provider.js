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
    page: "rent", //defaults to rent
    setPage: page => this.setPage(page),
    filterResults: () => this.filterResults(),
    setkycImageArray: item => this.setKycImageArray(item),
    kycImageArray: [],
    loggedInUser: "",
    setLoggedInUser: user => this.setUser(user)
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

  setUser = user => {
    this.setState({ loggedInUser: user });
  };

  /* Now I have an array of images added to the KYC image array... The next step is to upload them to the document of a specific user
  
  ideas...I need to store the specific user in state. 

  query according to that user and pass it the kyc Image array. 
  
  
  */

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

  setKycImageArray = item => {
    const newArray = [...this.state.kycImageArray, item];
    this.setState({ kycImageArray: newArray });
  };

  SearchInput = e => {
    this.setState({ searchInput: e.target.value });
    this.filterResults(e.target.value);
  };

  setPage = page => {
    this.setState({ page });
    console.log("i ran");
  };

  getListings = async () => {
    const { currentPage, itemsPerPage } = this.state;
    const startAt = currentPage * itemsPerPage - itemsPerPage;
    const query = db
      .collection("real-estate")
      .doc("listings")
      .collection(this.state.page) //later pass route-params into functions to render either the rent or buy listings
      .orderBy("Num")
      .startAt(startAt)
      .limit(itemsPerPage);
    const snapshot = await query.get();
    const listings = snapshot.docs.map(doc => doc.data());
    return this.setState({ listings });
  };
  componentDidMount() {
    this.getListings();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentPage != prevState.currentPage) {
      this.getListings();
    }

    if (this.state.page != prevState.page) {
      this.getListings();
    }

   

    console.log("prevState", prevState.listings);
    console.log("currentState", this.state.listings);
  }

  render() {
    console.log("rent buy test", this.state.page);
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
