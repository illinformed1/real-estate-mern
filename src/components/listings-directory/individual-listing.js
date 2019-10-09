import React, { useState, useEffect, Fragment } from "react";
import { db } from "../../firebase/index";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import GoogleMaps from "../google-maps";

export default function IndividualListing(props) {
  const [listing, setListing] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let getListing = async () => {
      try {
        let data = await db
          .collection("real-estate")
          .doc("listings")
          .collection("rent")
          .doc(props.match.params.id)
          .get();

        setListing(data.data());
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    getListing();
  }, []);

  if (loading) return <h1>loading...</h1>;
  else
    return (
      <Fragment>
        <ListingStyle image={listing.ImageURLArray[0]}>
          <div className="display-img">
            <Icon className="right-img-nav" name="chevron right" />
            <Icon className="left-img-nav" name="chevron left" />
          </div>
          <div className="listing-info">
            <div className="left-column">
              <h1>{listing.Title}</h1>
              <h5>
                {listing.City} {", "}
                {listing.Province}
                <div className="beds-bath-and-beyond">
                  <Icon name="bed" />
                  {listing.Beds}
                  <Icon name="bath" />
                  {listing.Baths}
                  <Icon name="car" />
                  {listing.Cars}
                  <span> | {listing.Type}</span>
                </div>
                <div>{listing.Price}</div>
              </h5>
              <div className="maps">
                <GoogleMaps />
              </div>
              <p>{listing.Description}</p>
              <ul>
                {listing.Features.map(feature => (
                  <li>{feature.text}</li>
                ))}
              </ul>
            </div>
          </div>
        </ListingStyle>
      </Fragment>
    );
}

/*

Baths: "5"
Beds: "1"
Bond: "2000"
Cars: "1"
City: "Quezon"
Description: "A full dope listing to test multiple images and the ID. With any luck this will be the first listing that has it's own page. "
Features: (3) [{…}, {…}, {…}]
ID: "QydWWH6IuEpefu5I9EZv"
ImageURLArray: (3) ["https://firebasestorage.googleapis.com/v0/b/real-e…=media&token=43f3c559-afba-4593-a272-315583d6840e", "https://firebasestorage.googleapis.com/v0/b/real-e…=media&token=2e421ff9-a865-453f-b42c-4b75ee30135c", "https://firebasestorage.googleapis.com/v0/b/real-e…=media&token=769b712d-549f-48f3-8b07-50e3ca0cd761"]
Price: "400000"
Province: "Metro Manila"
Tagline: "This is just a house"
Terms: ""
Title: "A house "
Type: "House" */

const ListingStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  flex-direction: column;
  .display-img {
    margin-top: 2rem;
    position: relative;
    height: 70vh;
    width: 60vw;
    background: url(${props => props.image});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    .left-img-nav {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 45%;
      left: 2px;
      font-size: 2rem;
      border-radius: 50%;
      background-color: white;
      height: 4rem;
      width: 4rem;
    }

    .right-img-nav {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 45%;
      right: 2px;
      font-size: 2rem;
      border-radius: 50%;
      background-color: white;
      height: 4rem;
      width: 4rem;

      icon {
        position: relative;
        left: 30px;
      }
    }
  }

  .listing-info {
    display: grid;
    width: 60vw;
    grid-template-columns: 1.5fr 1fr;
    border-top: 3px solid black;
  }
  .maps {
    width: 60vw;
    height: 50vh;
  }
`;
