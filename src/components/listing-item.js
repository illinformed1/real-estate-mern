import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "PHP"
});

export default function ListingItem({
  title,
  description,
  tagline,
  city,
  province,
  beds,
  id,
  baths,
  image,
  price
}) {
  const [imageCount, setImageCount] = useState(0);

  let handleImageIncrement = () => {
    if (imageCount < image.length - 1) {
      setImageCount(imageCount + 1);
    } else {
      setImageCount(0);
    }
  };

  let handleImageDecrement = () => {
    if (imageCount > 0) {
      setImageCount(imageCount - 1);
    } else {
      setImageCount(image.length - 1);
    }
  };

  return (
    <CardStyling>
      <div style={{ position: "relative" }}>
        {/*image.length > 1 ? (
          <span className="left-chevron" onClick={() => handleImageDecrement()}>
            <Icon name="chevron left" />
          </span>
        ) : null*/}

        <img
          className="card-img"
          src={image === undefined ? null : image[imageCount]}
          alt="Listing Card "
          style={{ height: "22rem" }}
        />
        {/*image.length > 1 ? (
          <span
            className="right-chevron"
            onClick={() => handleImageIncrement()}
          >
            <Icon
              name="chevron right"
              style={{ position: "relative", left: "0.2rem" }}
            />
          </span>
        ) : null*/}

        <div className="image-counter">
          <span>
            {imageCount + 1}/{/*image.length*/}
          </span>
          <Icon name="image" />
        </div>
      </div>

      <div className="card-text" onClick={() => id}>
        <Link to={`/listing-item/${id}`}>
          <h2 className="title">{title}</h2>
        </Link>
        <h3>{tagline}</h3>
        <h4 className="price">{formatter.format(price)}</h4>
        <span>
          {city}, {province}
        </span>
        <div className="beds-bath-and-beyond">
          <Icon name="bed" />
          {beds}
          <Icon name="bath" />
          {baths}
        </div>

        <div>2 days ago</div>
      </div>
    </CardStyling>
  );
}

const CardStyling = styled.div`
  width: 50%;
  margin: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  .agent-branding {
    background: black;
    color: white;
  }

  img {
    min-width: 300px;
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
    margin: 2rem 0 2rem 0;
  }
  .price {
  }
  .card-text {
    display: flex;
    margin-left: 2rem;
    flex-direction: column;
  }
`;
