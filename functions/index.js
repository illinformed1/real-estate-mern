const functions = require("firebase-functions");
const algoliasearch = require("algoliasearch");

const APP_ID = functions.config().algolia.app;
const ADMIN_KEY = functions.config().algolia.key;

const client = algoliasearch("24Z7TGX3I3", "51dd1ce6c4b8f37cd826717744fe304d");
const index = client.initIndex("listings");

exports.addToIndex = functions.firestore
  .document("real-estate/listings/rent/{rentID}")
  .onCreate(snapshot => {
    const data = snapshot.data();
    objectID = snapshot.id;

    return index.addObject({ ...data, objectID});
  });

exports.updateIndex = functions.firestore
  .document("real-estate/listings/rent/{rentID}")
  .onUpdate(change => {
    const newData = change.after.data();
    const objectID = change.after.id;
    return index.saveObject({ ...newData, objectID });
  });
  

  exports.deleteFromIndex = functions.firestore.document("real-estate/listings/rent/{rentID}").onDelete((snap, context) => {
    const objectID = snap.id; 
    return index.deleteObject(objectID)
  })
