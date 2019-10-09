import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { Icon } from "semantic-ui-react";

//import {loading} from "/loading-background.gif";

/* Two divs hide overflow pre-load the next image into the one on the right and onClick transform it over.   */

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "PHP"
});

export default function SearchItems({ hit }) {
  console.log(hit);

  const {
    Title,
    Description,
    Tagline,
    ObjectID,
    City,
    Province,
    Beds,
    Baths,
    ImageURLArray,
    Price
  } = hit;
  const [imageCount, setImageCount] = useState(0);

  console.log("Image URL Array test", ImageURLArray);

  let resizeWindow = () => {
    setSize({
      windowWidth: ref.current.clientWidth,
      windowHeight: ref.current.clientHeight
    });
  };
  const [size, setSize] = useState({ windowWidth: 0, windowHeight: 0 });
  const ref = useRef(null);

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  const slideSpring = useSpring({
    transform: `translateX(-${size.windowWidth * imageCount}px)`
  });

  let handleImageIncrement = () => {
    if (imageCount < ImageURLArray.length - 1) {
      setImageCount(imageCount + 1);
    } else {
      setImageCount(0);
    }
  };

  let handleImageDecrement = () => {
    if (imageCount > 0) {
      setImageCount(imageCount - 1);
    } else {
      setImageCount(ImageURLArray.length - 1);
    }
  };

  console.log(size);
  return (
    <ListingGridStyle>
      <CardStyling
        image1={
          ImageURLArray === undefined
            ? "/loading-background.gif"
            : ImageURLArray[imageCount]
        }
        image2={
          ImageURLArray === undefined
            ? "/loading-background.gif"
            : ImageURLArray[imageCount]
        }
      >
        <div className="img-div-wrapper" ref={ref}>
          <div className="img-slider">
            {ImageURLArray === undefined
              ? null
              : ImageURLArray.map((img, index) => (
                  <Image
                    width={`${size.windowWidth}px`}
                    height={size.windowHeight}
                    style={slideSpring}
                    image={img}
                  />
                ))}
          </div>

          {ImageURLArray && (
            <React.Fragment>
              <span
                className="left-chevron"
                onClick={() => handleImageDecrement()}
              >
                <Icon name="chevron left" />
              </span>

              <span
                className="right-chevron"
                onClick={() => handleImageIncrement()}
              >
                <Icon
                  name="chevron right"
                  style={{ position: "relative", left: "0.2rem" }}
                />
              </span>
            </React.Fragment>
          )}

          <div className="image-counter">
            <span>
              {imageCount + 1}/{/*ImageURLArray.length*/}
            </span>
            <Icon name="image" />
          </div>
        </div>

        <div className="card-text" onClick={() => ObjectID}>
          <Link to={`/listing-item/${ObjectID}`}>
            <h2 className="title">{Title}</h2>
          </Link>

          <h4 className="price">{formatter.format(Price)}</h4>
          <div className="beds-bath-and-beyond">
            <Icon name="bed" />
            {Beds}
            <Icon name="bath" />
            {Baths}
          </div>
          <span>
            {City}, {Province}
          </span>

          <div>2 days ago</div>
        </div>
      </CardStyling>
    </ListingGridStyle>
  );
}

const ListingGridStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Image = styled(animated.div)`
  background: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: contain;

  background-position: top;
  width: 40rem;
  height: 26rem;

  @media only screen and (max-width: 600px) {
    max-width: 90vw;
    height: 20rem;
  }
`;

const CardStyling = styled.div`
  .img-div-wrapper {
    @media only screen and (max-width: 600px) {
      max-width: 90vw;
      height: 20rem;
    }

    width: 40rem;
    height: 26rem;
    position: relative;
  }

  margin: 2rem;
  position: relative;
  overflow: hidden;

  display: grid;
  grid-gap: 2rem;
  grid-template-rows: min-content 1fr;

  background: white;
  grid-gap: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  .img-slider {
    display: flex;
    position: absolute;
  }

  .agent-branding {
    background: black;
    color: white;
  }

  .image-counter {
    position: absolute;
    bottom: 2px;
    right: 2px;
    background: white;
    opacity: 0.8;
  }

  .left-chevron {
    position: absolute;
    bottom: 45%;
    font-size: 3rem;
    background: white;
    opacity: 0.8;
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
  }

  .right-chevron {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    bottom: 46.55%;
    right: 0.2rem;
    font-size: 3rem;
    background: white;
    opacity: 0.8;
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
  }

  .title {
    text-align: center;
    margin: 1rem 0 1rem 0;
  }
  .price {
  }

  .beds-bath-and-beyond {
    margin: 0 0 2rem 0;
  }

  .card-text {
    display: flex;

    text-align: center;
    flex-direction: column;
  }
`;
