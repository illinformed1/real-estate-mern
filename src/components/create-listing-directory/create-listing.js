import React, { useState } from "react";
import CreateListingForm from "./create-listing-form";
import { db } from "../../firebase/index";

export default function CreateListing() {
  let assembleObject = (e, obj) => {
    e.preventDefault();
    console.log(obj);

    /* Creates the new listing from the info entered into the listing-form then gets the ID and assigns it to a property because Firebase is annoying.
    I don't know if this is best practice.
    */

    db.collection("listings")
      .add({
        Type: obj.Type,
        Title: obj.Title,
        Tagline: obj.Tagline,
        City: obj.City,
        Province: obj.associatedProvince,
        Beds: obj.Beds,
        Baths: obj.Baths,
        Cars: obj.Cars,
        Features: obj.selectedFeatures,
        Terms: obj.Terms,
        Price: obj.Price,
        Bond: obj.Bond,
        Description: obj.Description,
        ImageURLArray: obj.ImageURLArray
      })
      .then(doc =>
        db
          .collection("listings")
          .doc(doc.id)
          .set(
            {
              ID: doc.id
            },
            { merge: true }
          )
      );
  };

  return (
    <div>
      <CreateListingForm assembleObject={assembleObject} />
    </div>
  );
}
