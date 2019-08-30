import React from "react";
import { Dropdown } from "semantic-ui-react";
import {
  propertyType,
  minPricePerMonth,
  maxPricePerMonth,
  bedsMin,
  bedsMax
} from "./search-params";

export default function SearchParamsDropdowns() {
  return (
    <div>
      <span>
        Property type{" "}
        <Dropdown
          inline
          options={propertyType}
          defaultValue={propertyType[0].value}
        />
      </span>
      <span>
        Beds (min) <Dropdown inline options={bedsMin} />
      </span>
      <span>
        Beds (max) <Dropdown inline options={bedsMax} />
      </span>
      <span>
        Price pm (min) <Dropdown inline scrolling options={minPricePerMonth} />
      </span>
      <span>
        Price pm (max) <Dropdown inline scrolling options={maxPricePerMonth} />
      </span>
    </div>
  );
}
