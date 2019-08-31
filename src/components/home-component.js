import React from "react";
import axios from "axios";
import TopSection from "./top-section";

export default function Home() {
  /*axios
    .post("http://localhost:4000/realestate/add", {
      title: "Giant Mansion on the hill",
      price: "420php / month",
      location: "Down Shops",
      description: "It a boat",
      image: "makati-condo.jpg"
    })
    .then(res => console.log(res.data));*/

  return (
    <div>
      <TopSection />

      <h1>Im home</h1>
    </div>
  );
}
