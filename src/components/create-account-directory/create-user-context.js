import React, { Component } from "react";

export const CreateUserContext = React.createContext();

export default class CreateUserProvider extends Component {
  state = {
    kycImageArray: [],
    test: 1
  };

  render() {
    return (
      <CreateUserContext.Provider value={this.state}>
        {this.props.children}
      </CreateUserContext.Provider>
    );
  }
}
