import React from "react";

export default function ListingItem({
  title,
  description,
  location,
  image,
  price
}) {
  return (
    <div className="card" style={{ width: "30rem" }}>
      <div className="card-header">Promoted</div>
      <img
        className="card-img-top"
        src={image}
        alt="Card image cap"
        style={{ height: "22rem" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {price}
        <p className="card-text">
          {description}
          {location}
        </p>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
    </div>
  );
}
