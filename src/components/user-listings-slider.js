import React, { useState } from "react";
import UserListings from "./user-listings";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { animated, useSpring } from "react-spring";

export default function UserListingsSlider({ userListings }) {
  const [sliderCounter, setSliderCounter] = useState(0);

  const sliderSpring = useSpring({
    transform: `translateX(-${sliderCounter * 44}rem)`
  });

  let handleIncrement = () => {
    if (sliderCounter < userListings.length - 1) {
      console.log(sliderCounter, userListings.length);
      setSliderCounter(sliderCounter + 1);
    } else {
      setSliderCounter(0);
    }
  };

  let handleDecrement = () => {
    if (sliderCounter > 0) {
      setSliderCounter(sliderCounter - 1);
    } else {
      setSliderCounter(userListings.length - 1);
    }
  };

  return (
    <div>
      <SliderWrapper>
        <div>
          <Icon
            className="icon-top"
            name="angle left"
            onClick={() => handleDecrement()}
          />
          <Icon
            className="icon-top"
            name="angle right"
            onClick={() => handleIncrement()}
          />
        </div>
        <div className="slider">
          {userListings.map((listing, index) => (
            <animated.div style={sliderSpring}>
              <UserListings
                key={index}
                tagline={listing.Tagline}
                id={listing.ID}
                price={listing.Price}
                title={listing.Title}
                city={listing.City}
                province={listing.Province}
                beds={listing.Beds}
                baths={listing.Baths}
                description={listing.Description}
                image={listing.ImageURLArray}
              />
            </animated.div>
          ))}
        </div>
      </SliderWrapper>
    </div>
  );
}

const SliderWrapper = styled.div`
  position: relative;
  display: flex;

  flex-direction: column;
  align-items: center;
  overflow: hidden;

  width: 44rem;
  height: 50rem;

  .slider {
    position: absolute;
    top: 4rem;
    display: flex;

    width: 44rem;
  }

  .icon-top {
    font-size: 3rem;
    margin: 0 2rem;
  }
`;
