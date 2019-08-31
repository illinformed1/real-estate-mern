import React, { useState } from "react";
import styled from "styled-components";
import { Dropdown, Input, Label, Button, Icon } from "semantic-ui-react";

import {
  cityOptions,
  provinceOptions,
  beds,
  propertyType,
  features
} from "./listing-options";
import ImageUpload from "../image-upload";

export default function CreateListing() {
  let setProvince = e => {
    let city = cityOptions.find(city => city.text === e.target.textContent);
    let provincekey = city.province;
    let province = provinceOptions.find(
      province => province.key === provincekey
    );

    updateProvince(province.text);
  };

  let selectFeature = e => {
    let feature = features.find(
      feature => feature.text === e.target.textContent
    );
    console.log(feature);
    setSelectedFeatures([...selectedFeatures, feature]);

    /* the first time it run or when nothing has been selected it takes the imported array and copies it into state
       that array can't be filtered against the value that comes in from the selection event again because it will 
       just copy the same array again - the selection and ignore what was deleted last time. 
       on ever iteration after the first, the array in state is filtered instead. 
    */

    if (selectedFeatures.length === 0) {
      setFiltedFeatures(
        features.filter(feature => feature.text !== e.target.textContent)
      );
    } else {
      setFiltedFeatures(
        filteredFeatures.filter(
          feature => feature.text !== e.target.textContent
        )
      );
    }
  };

  const [province, updateProvince] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [filteredFeatures, setFiltedFeatures] = useState([]);

  return (
    <div>
      {console.log(features.length)}

      <CreateFormStyle>
        <div className="cent-align">
          <div>
            <h2 className="header">Let's Create That Listing</h2>
            <h4 className="sub-header"> First Tell Us About Your Property </h4>
            <form>
              <div class="form-group">
                <Dropdown text="Property Type" options={propertyType} />
              </div>
              <div class="form-group">
                <label>Property Title</label>
                <input class="form-control" placeholder="Title" />
              </div>
              <div class="form-group">
                <label>Short Tagline</label>
                <input class="form-control" placeholder="Tagline" />
              </div>
              <div class="form-group">
                <div class="ui-dropdown-selction">
                  <label>Select City</label>
                  <Dropdown
                    placeholder="Select City"
                    fluid
                    search
                    selection
                    options={cityOptions}
                    onChange={e =>
                      e.target.textContent === ""
                        ? alert("please select a city")
                        : setProvince(e)
                    }
                  />
                </div>
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  placeholder="province"
                  readOnly
                  value={province}
                  onClick={() => alert("please select a city")}
                />
              </div>
              <div class="form-group icon-bed">
                <Icon name="bed" />
                <Dropdown inline options={beds} />

                <Icon name="bath" />
                <Dropdown inline options={beds} />
              </div>

              <div class="form-group">
                <Dropdown
                  compact
                  text="Features click all the apply"
                  options={
                    selectedFeatures.length === 0 ? features : filteredFeatures
                  }
                  onChange={e => selectFeature(e)}
                />
              </div>
              {/* ------ Features Rendering ------*/}
              <ul>
                {selectedFeatures.map(feature => (
                  <li>{feature.text}</li>
                ))}
              </ul>
              {/* ------ Features Rendering ------*/}

              <div class="form-group">
                <h3>Payment Terms</h3>
                <div class="form-group">
                  <Button color="blue">Sale</Button>
                  <Button color="blue">Rent</Button>
                </div>
                <label>Price</label>
                <div class="form-group">
                  <Input labelPosition="right" type="text" placeholder="Amount">
                    <Label basic>P</Label>
                    <input />
                    <Label>Per Month</Label>
                  </Input>
                </div>
                <label>Bond</label>
                <div class="form-group">
                  <Input labelPosition="right" type="text" placeholder="Amount">
                    <Label basic>P</Label>
                    <input />
                  </Input>
                </div>
              </div>
              <div class="form-group">
                <label>Description</label>
                <input className="description-box" />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div>
            <ImageUpload />
          </div>
        </div>
      </CreateFormStyle>
    </div>
  );
}

const CreateFormStyle = styled.div`
  display: flex;
  font-size: 1.2rem;
  flex-direction: column;
  width: 100%;
  padding-top: 3rem;
  color: white;
  background: linear-gradient(#09476f, #2e8c8a);
  justify-content: center;

  .header {
    margin-bottom: 2rem;
  }

  .sub-header {
    margin-bottom: 1rem;
  }

  .cent-align {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
  }

  .description-box {
    height: 4rem;
    width: 100%;
  }
`;
