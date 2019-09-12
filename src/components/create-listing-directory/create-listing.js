import React, { useState } from "react";
import CreateListingForm from "./create-listing-form";
import { db } from "../../firebase/index";

import firebase, { firestore } from "firebase";

class CreateListing extends React.Component {
  state = {
    documentsInDB: 0
  };

  getDocsinDB = async () => {
    //There is another document called --stats-- that contains the amount of documents in the collection
    //This value is used to assign a number to new documents as they are created -used for pagination and ordering-
    //I read from this document take the value and add it as a property to each listings.
    //obviously, creating a new document will increment this value, so it's a count.
    //I did it like this because it's cheap. I read one document instead of all the documents.
    //Also different clients can't fuck it up, when they connect and access the same data at the same time.
    //#single source of truth
    await db
      .collection("listings")
      .doc("--stats--")
      .get()
      .then(snapshot => {
        // first condition brings peace to the universe if all the data is deleted.
        // Stops the function from running in render with old state data.
        //Deleting db data does not affect app state
        if (!snapshot.data()) return this.setState({ documentsInDB: 0 });
        console.log("testing the snapshot data", snapshot.data().Num);
        this.setState(() => ({ documentsInDB: snapshot.data().Num }));
      });
  };

  async componentWillMount() {
    await this.getDocsinDB();
    console.log("in didMount", this.state.documentsInDB);
  }

  render() {
    let assembleObject = async (e, obj) => {
      e.preventDefault();
      await this.getDocsinDB();
      console.log("in render", this.state.documentsInDB);

      const increment = firebase.firestore.FieldValue.increment(1);

      /* Batch updates the count in --stats-- as new documents are added*/

      const statsRef = db.collection("listings").doc("--stats--");
      const batch = db.batch();
      batch.set(statsRef, { Num: increment }, { merge: true });
      batch.commit();

      /* Creates the new listing from the info entered into the listing-form .then() gets the ID and assigns it to a property because Firebase is annoying.
I don't know if this is best practice. Will use later as route params 
*/

      db.collection("listings")
        .add({
          Num: this.state.documentsInDB,
          CreatedAt: firestore.FieldValue.serverTimestamp(),
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
}

export default CreateListing;
