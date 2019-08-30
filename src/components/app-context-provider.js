import React, { Component } from "react";

export const AppContext = React.createContext();

export default class AppProvider extends Component {
  state = {
    test: 5,
    searchInput: "",
    setSearchInput: e => this.setState({ searchInput: e.target.value })
  };
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
