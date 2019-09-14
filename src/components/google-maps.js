import React from "react";

import { Map, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={mapStyles}
        zoom={8}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "EMPTY"
})(MapContainer);

const mapStyles = {
  width: "60vw",
  height: "40vh"
};
