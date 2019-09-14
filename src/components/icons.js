import React from "react";
import styled from "styled-components";
import php from "./php.png";

export default function Icons() {
  return (
    <div>
      <GridTemplate>
        <div className="col non-icon">
          <img src={php} alt="peso" />
          <p>Free To List</p>
          <br />
          <p>
            No cost for non-agency sellers to list a single property on our
            platform. Always free for roommate seeking and bed-spacing.
          </p>
        </div>
        <div className="col">
          <span>
            {" "}
            <i className="fas fa-portrait "></i>
          </span>
          <p>All Sellers Are Carefully Vetted</p>
          <br />
          <p>
            To sell or list a property on our platform a seller must submit
            identification and prove ownership. This ensures peace of mind for
            renters/ buyers and helps keep our platform honest. Our support team
            carefully review all new accounts, and we won't list a property
            until ownership is confirmed.
          </p>
        </div>
        <div className="col">
          <span>
            <i className="far fa-thumbs-up "></i>
          </span>
          <p>Title Guarantee</p>
          <br />
          <p>
            To sell on our platform, owners must first prove they have the title
            for their property. Our support team carefully review all title
            documentation before listing a property. We will pay all legal
            expenses on the buyer's behalf to pursue compenstation for any
            seller misconduct or title fraud.
          </p>
        </div>
        <div className="col">
          <span>
            <i className="fas fa-home "></i>
          </span>
          <p>Arrange a Meeting</p>
          <br />
          <p>
            Ready to see a property? We offer viewing service on behalf of
            sellers. Our commission earning, agents can give prospective buyers
            and renters the grand tour. Manage a property abroad and start
            earning rent sooner. We'll take care of the hard parts, you profit
            from your investment
          </p>
        </div>
        <div className="col">
          <span>
            <i className="far fa-comment"></i>
          </span>
          <p>Community Reviewed</p>
          <br />
          <p>
            Our service was built from the ground up with the community in mind.
            All listings will move up and down the page based on community
            interactions. Listings which better describe the properties will be
            shown to more prospective buyers. Sellers this means you need to
            take more photos, include details, and describe your property.
          </p>
        </div>
      </GridTemplate>
    </div>
  );
}

const GridTemplate = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;

  .col {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    text-align: center;
  }

  .non-icon {
    margin: 0rem;

    img {
      width: 11rem;
    }
  }

  i {
    font-size: 9rem;
    margin-bottom: 1rem;
  }
`;
