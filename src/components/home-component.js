import React from "react";
import axios from "axios";
import TopSection from "./top-section";
import Listings from "./listings";

export default function Home() {
  return (
    <div>
      <TopSection />
      <Listings />
    </div>
  );
}
