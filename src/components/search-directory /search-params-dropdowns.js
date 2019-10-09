import React, { useContext } from "react";
import { Dropdown } from "semantic-ui-react";
import { RefinementList } from "react-instantsearch-dom";
import {
  propertyType,
  minPricePerMonth,
  maxPricePerMonth,
  bedsMin,
  bedsMax
} from "./search-params";
import { AppContext } from "../app-context-provider";

export default function SearchParamsDropdowns() {
  const context = useContext(AppContext);
  console.log("context in SearchParams", context);

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
        Beds (min){" "}
        <Dropdown
          inline
          options={bedsMin}
          onChange={e => context.setBedsMin(e.target.textContent)}
        />
      </span>
      <span>
        Beds (max){" "}
        <Dropdown
          inline
          options={bedsMax}
          onChange={e => context.setBedsMax(e.target.textContent)}
        />
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
