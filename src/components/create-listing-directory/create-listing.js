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

export default function CreateListing() {
  let setProvince = e => {
    let city = cityOptions.find(city => city.text === e.target.textContent);
    let provincekey = city.province;
    let province = provinceOptions.find(
      province => province.key === provincekey
    );

    updateProvince(province.text);
  };

  const [province, updateProvince] = useState("");

  console.log(province);

  return (
    <div>
      <CreateFormStyle>
        <div className="cent-align">
          <form>
            <div class="form-group">
              <Dropdown text="property type" options={propertyType} />
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
                placeholder="province"
                readOnly
                value={province}
                onClick={() => alert("please select a city")}
              />
            </div>
            <div class="form-group">
              <Icon name="bed" />
              <Dropdown text="Bedrooms" inline options={beds} />
            </div>
            <div class="form-group">
              <Icon name="bath" />
              <Dropdown text="Bathrooms" inline options={beds} />
            </div>

            <div class="form-group">
              <Dropdown
                compact
                text="Features click all the apply"
                options={features}
              />
            </div>
            <div class="form-group">
              <span>
                <i className="fab fa-weixin"></i>
              </span>

              <input placeholder="WeChat contact info" />
            </div>
            <div class="form-group">
              <h3>Payment Terms</h3>
              <div class="form-group">
                <Button color="blue">Sale</Button>
                <Button color="blue">Rent</Button>
              </div>
              <div class="form-group">
                <label>Price</label>
                <Input labelPosition="right" type="text" placeholder="Amount">
                  <Label basic>P</Label>
                  <input />
                  <Label>Per Month</Label>
                </Input>
              </div>

              <div class="form-group">
                <label>Bond</label>
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
      </CreateFormStyle>
    </div>
  );
}

const CreateFormStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  .cent-align {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }

  .description-box {
    height: 4rem;
    width: 100%;
  }
`;
