import React from "react";
import CreateListingForm from "./create-listing-form";
import { db } from "../../firebase/index";

import firebase, { firestore } from "firebase";

class CreateListing extends React.Component {
  state = {
    rentDocumentsInDB: 0,
    buyDocumentsInDB: 0,
    rentOrBuy: ""
  };

  setRentOrBuy = selection => {
    this.setState({ rentOrBuy: selection });
  };

  updateRentDocsinDB = async () => {
    //There is another document called --stats-- that contains the amount of documents in the collection
    //This value is used to assign a number to new documents as they are created -used for pagination and ordering-
    //I read from this document take the value and add it as a Num property to each listings.
    //creating a new document will increment this value, so the new document get Num of last document + 1. It's a count.
    //I did it like this because it's cheap. I read one document instead of all the documents.
    //Also different clients can't fuck it up, when they connect and access the same data at the same time.
    //#single source of truth
    await db
      .collection("real-estate")
      .doc("--stats--")
      .get()
      .then(snapshot => {
        // first condition brings peace to the universe if the stats data is deleted. Warning -resets item count-
        // Stops the function from running in render with old state data.
        //Deleting db data does not affect app state
        if (!snapshot.data()) return this.setState({ rentDocumentsInDB: 0 });
        console.log("testing the snapshot data", snapshot.data().rentDocs);
        this.setState(() => ({ rentDocumentsInDB: snapshot.data().rentDocs }));
      });
  };

  updateBuyDocsinDB = async () => {
    await db
      .collection("real-estate")
      .doc("--stats--")
      .get()
      .then(snapshot => {
        if (!snapshot.data()) return this.setState({ buyDocumentsInDB: 0 });
        console.log("testing the snapshot data", snapshot.data().buyDocs);
        this.setState(() => ({ buyDocumentsInDB: snapshot.data().buyDocs }));
      });
  };

  async componentDidMount() {
    //makes sure everything is good to go before mount
    await this.updateBuyDocsinDB();
    await this.updateRentDocsinDB();
    console.log("in didMount", this.state.documentsInDB);
  }

  render() {
    let assembleObject = async (e, obj) => {
      e.preventDefault();
      await this.updateBuyDocsinDB();
      await this.updateRentDocsinDB();

      console.log("in render", this.state.documentsInDB);

      const increment = firebase.firestore.FieldValue.increment(1);

      // try {
      if (this.state.rentOrBuy === "rent") {
        /* Batch updates the count in --stats-- as new documents are added*/

        const statsRef = db.collection("real-estate").doc("--stats--");
        const batch = db.batch();
        batch.set(statsRef, { rentDocs: increment }, { merge: true });
        batch.commit();

        /* Creates the new listing from the info entered into the listing-form .then() gets the ID and assigns it to a property because Firebase is annoying.
I don't know if this is best practice. Will use later as route params 
*/

        db.collection("real-estate")
          .doc("listings")
          .collection("rent")
          .add({
            Num: this.state.rentDocumentsInDB,
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
              .collection("real-estate")
              .doc("listings")
              .collection("rent")
              .doc(doc.id)
              .set(
                {
                  ID: doc.id
                },
                { merge: true }
              )
          );
      } else if (this.state.rentOrBuy === "buy") {
        /* Batch updates the count in --stats-- as new documents are added*/

        const statsRef = db.collection("real-estate").doc("--stats--");
        const batch = db.batch();
        batch.set(statsRef, { buyDocs: increment }, { merge: true });
        batch.commit();

        /* Creates the new listing from the info entered into the listing-form .then() gets the ID and assigns it to a property because Firebase is annoying.
I don't know if this is best practice. Will use later as route params 
*/

        db.collection("real-estate")
          .doc("listings")
          .collection("buy")
          .add({
            Num: this.state.buyDocumentsInDB,
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
              .collection("real-estate")
              .doc("listings")
              .collection("buy")
              .doc(doc.id)
              .set(
                {
                  ID: doc.id
                },
                { merge: true }
              )
          );
        // } else {
        //throw new Error(
        //"This listing isn't for rent or sale. Please select one of the options"
        //  );
      }
      //} catch (e) {
      //alert(e);
      // }
    };

    return (
      <div>
        <CreateListingForm
          setRentOrBuy={this.setRentOrBuy}
          assembleObject={assembleObject}
        />
      </div>
    );
  }
}

export default CreateListing;
