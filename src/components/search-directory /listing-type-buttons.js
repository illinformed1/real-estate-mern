import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function ListingTypeButtons() {
  return (
    <div>
      <Link to="/listings/rent">
        <Button inverted color="blue">
          Rent
        </Button>
      </Link>
      <Link to="/listings/buy">
        <Button inverted color="blue">
          Buy
        </Button>
      </Link>
      <Link to="/share">
        <Button inverted color="blue">
          Share
        </Button>
      </Link>
      <Link to="/createlisting">
        <Button inverted color="blue">
          List
        </Button>
      </Link>
      <Button inverted color="blue">
        Find Agents
      </Button>
    </div>
  );
}
