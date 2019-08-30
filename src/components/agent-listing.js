import React from "react";
import styled from "styled-components";
import agent from "./agent.png";

export default function AgentListing() {
  return (
    <div>
      <AgentListingStyle>
        <img src={agent} />
        <div className="right">
          <h1>Let Us Work For You</h1>
          <h2>Boost Your Listing To The Top Of The Page</h2>
          <div className="right-col">
            <span>
              <i className="fas fa-chart-line"></i>
            </span>
            <ul style={{ textAlign: "left" }}>
              <li>
                <p>
                  Featured posts are shown first on every-page. Promote a post
                  with our easy to budget fixed price per-listing
                </p>
              </li>
              <li>
                <p>
                  Hand over the keys to one of our agents and we'll show
                  prospective buyers and renters around your house, appartment
                  or condo. Never miss our on a sale again.{" "}
                </p>
              </li>
              <li>
                <p>
                  No lock-in contracts or set-in-stone agreements. Pay our
                  agents monthly. Promote your listing for as many days as you'd
                  like.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </AgentListingStyle>
    </div>
  );
}

const AgentListingStyle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .right {
    text-align: center;

    .right-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      i {
        font-size: 15rem;
        color: #59cff0;
      }
      li {
        margin: 1rem;
      }
    }
  }
`;
