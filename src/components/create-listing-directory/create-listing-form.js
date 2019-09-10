import React, { useState, useEffect } from "react";
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

export default function CreateListingForm({ assembleObject }) {
  const [cities, setCities] = useState([]);
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    setProvinces(provinceOptions);
  }, []);

  let setProvince = city => {
    //province.key === city.province
    console.log("am i the city", city);
    let province = provinces.filter(province => province.key === city.province);

    associateProvince(province[0].text);
  };

  let assignCities = () => {
    setCities(cityOptions);
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

  /* Need to populate and empty the dropdown when not in use  */

  let handleCloseWithoutSelection = e => {
    if (e === undefined) {
      setCities([]);
    }
  };

  let handleCitySelection = (e, data) => {
    if (e.target.textContent === "") {
      alert("please select a city");
    } else {
      setCity(e.target.textContent);
      let city = cityOptions.find(city => city.text === e.target.textContent);
      setCities([...[], city]);
      setProvince(city);
    }
  };

  let handleTerm = (e, term) => {
    e.preventDefault();
    setTerms(term);
  };

  let deleteFeature = feature => {
    setSelectedFeatures(selectedFeatures.filter(item => item !== feature));
    setFiltedFeatures([...filteredFeatures, feature]);
  };

  const [Type, setType] = useState("");
  const [Title, setTitle] = useState("");
  const [Tagline, setTagline] = useState("");
  const [City, setCity] = useState("");
  const [associatedProvince, associateProvince] = useState("");
  const [Beds, setBeds] = useState("");
  const [Baths, setBaths] = useState("");
  const [Cars, setCars] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [Terms, setTerms] = useState("");
  const [Price, setPrice] = useState("");
  const [Bond, setBond] = useState("");
  const [Description, setDescription] = useState("");
  const [ImageURLArray, setImageURL] = useState([]);

  const [filteredFeatures, setFiltedFeatures] = useState([]);

  return (
    <div>
      <CreateFormStyle>
        {console.log(ImageURLArray)}
        <div className="form-wrapper">
          <div className="background p-5 border border-info">
            <h2 className="header">Let's Create That Listing</h2>
            <h3 className="sub-header"> First Tell Us About Your Property </h3>
            <form>
              <div class="form-group">
                <Dropdown
                  text="Property Type"
                  options={propertyType}
                  onChange={e => setType(e.target.textContent)}
                />
              </div>
              <div class="form-group">
                <label>Property Title</label>
                <Input
                  fluid
                  placeholder="Title"
                  onChange={e => setTitle(e.target.value)}
                />
              </div>

              <div class="form-group">
                <label>Short Tagline</label>
                <Input
                  fluid
                  placeholder="Tagline"
                  onChange={e => setTagline(e.target.value)}
                />
              </div>

              <div class="form-group">
                <div class="ui-dropdown-selction">
                  <label>Select City</label>
                  <Dropdown
                    placeholder={() => (City === "" ? "Select City" : City)}
                    fluid
                    search
                    onClose={e => handleCloseWithoutSelection(e)}
                    onOpen={() => assignCities()}
                    selection
                    options={cities}
                    onChange={(e, data) => handleCitySelection(e, data)}
                  />
                </div>
              </div>
              <div className="form-group">
                <Input
                  fluid
                  labelPosition="left"
                  type="text"
                  placeholder="Province"
                  value={associatedProvince}
                  readOnly
                  onClick={() => alert("please select a city")}
                >
                  <Label>Province</Label>
                  <input />
                </Input>
              </div>
              <div class="form-group icon-bed">
                <Icon name="bed" />
                <Dropdown
                  inline
                  options={beds}
                  onChange={e => setBeds(e.target.textContent)}
                />

                <Icon name="bath" />
                <Dropdown
                  inline
                  options={beds}
                  onChange={e => setBaths(e.target.textContent)}
                />

                <Icon name="car" />
                <Dropdown
                  inline
                  options={beds}
                  onChange={e => setCars(e.target.textContent)}
                />
              </div>

              <div class="form-group">
                <Dropdown
                  scrolling
                  compact
                  text="Features click all that apply"
                  options={
                    selectedFeatures.length === 0 ? features : filteredFeatures
                  }
                  onChange={e => selectFeature(e)}
                />
              </div>
              {/* ------ Features Rendering ------*/}
              <ul>
                {selectedFeatures.map(feature => (
                  <span>
                    <Icon
                      onClick={() => deleteFeature(feature)}
                      name="close"
                      color="red"
                    />
                    <li>{feature.text}</li>
                  </span>
                ))}
              </ul>
              {/* ------ Features Rendering ------*/}

              <div class="form-group">
                <h3 className="pay-heading">Payment Terms</h3>
                <div class="form-group d-flex justify-content-center">
                  <Button onClick={e => handleTerm(e, "sale")} color="blue">
                    Sale
                  </Button>
                  <Button onClick={e => handleTerm(e, "rent")} color="blue">
                    Rent
                  </Button>
                </div>
                <label>Price</label>
                <div class="form-group">
                  <Input labelPosition="right" type="text" placeholder="Amount">
                    <Label basic>P</Label>
                    <input onChange={e => setPrice(e.target.value)} />
                    <Label>Per Month</Label>
                  </Input>
                </div>
                <label>Bond</label>
                <div class="form-group">
                  <Input labelPosition="right" type="text" placeholder="Amount">
                    <Label basic>P</Label>
                    <input onChange={e => setBond(e.target.value)} />
                  </Input>
                </div>
              </div>
              <ImageUpload setImageURL={setImageURL} />
              <div class="form-group">
                <label>Description</label>
                <input
                  onChange={e => setDescription(e.target.value)}
                  className="description-box"
                />
              </div>

              <button
                onClick={e =>
                  assembleObject(e, {
                    Type,
                    Title,
                    Tagline,
                    City,
                    associatedProvince,
                    Beds,
                    Baths,
                    Cars,
                    selectedFeatures,
                    Terms,
                    Price,
                    Bond,
                    Description,
                    ImageURLArray
                  })
                }
                class="btn btn-info"
              >
                Submit
              </button>
            </form>
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
  min-height: 100vh;
  color: white;
  background: url("/background-create-listing.jpg");
  background-size: cover;

  justify-content: center;

  .header {
    margin-bottom: 2rem;
  }
  .background {
    background: linear-gradient(#09476f, #2e8c8a);
    opacity: 0.9;
  }
  .sub-header {
    margin: 3rem;
  }

  .image-upload-box {
    height: min-content;
    background: linear-gradient(#09476f, #2e8c8a);
  }
  .form-wrapper {
    display: grid;

    justify-items: center;
    grid-template-columns: 1fr 1fr;
  }

  .pay-heading {
    margin: 3rem;
  }

  .border {
    border-width: 5px !important;
  }

  .description-box {
    height: 4rem;
    width: 100%;
  }
`;
