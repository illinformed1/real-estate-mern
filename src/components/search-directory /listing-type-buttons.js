import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function ListingTypeButtons() {
  return (
    <div>
      <Button inverted color="blue">
        Rent
      </Button>
      <Button inverted color="blue">
        Buy
      </Button>
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
