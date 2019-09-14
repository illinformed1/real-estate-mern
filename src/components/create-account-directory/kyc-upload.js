import React, { useState } from "react";
import { storage } from "../../firebase/index";
import { db } from "../../firebase/index";
import styled from "styled-components";
import { AppContext } from "../app-context-provider";
import { getPackedSettings } from "http2";

export default function KycUpload() {
  const [files, setFiles] = useState();

  const [uploadProgress, setUploadProgress] = useState(0);

  /* this uploads a file and stores the url of that file in an array which is saved to state
  all I really need to do, is put a submit button on the kyc page that takes this array up 
  to create account and saves it in the database.  
  
  
  */

  let handleSubmit = e => {
    e.preventDefault();
    if (e.target.files[0]) {
      setFiles(e.target.files[0]);
    }
  };

  return (
    <AppContext.Consumer>
      {({ setkycImageArray, kycImageArray, loggedInUser }) => {
        /* add kyc image array to a user that lives in the app context */

        /*let addKycToUserDoc = db
          .collection("users")
          .doc("loggedInUser")
          .update({
            KycPhotos: kycImageArray
          });*/

        console.log("kycimagearray", kycImageArray);
        let handleUpload = e => {
          e.preventDefault();
          const { name } = files;
          const uploadTask = storage.ref(`images/${name}`).put(files);
          uploadTask.on(
            "state_changed",
            snapshot => {
              const progress = Math.round(
                (snapshot.bytesTransfered / snapshot.totalBytes) * 100
              );
              setUploadProgress(progress);
            },
            error => {
              console.log(error);
            },
            () => {
              storage
                .ref("images")
                .child(name)
                .getDownloadURL()
                .then(url => {
                  console.log("url test", url);
                  setkycImageArray(url);
                });
            }
          );
          //addKycToUserDoc();
        };

        /* Hey Future Dean Fix this */

        return (
          <div>
            <ImageUploadStyle>
              {console.log(kycImageArray)}
              <div className="img-input">
                <input type="file" onChange={e => handleSubmit(e)} />

                <button onClick={e => handleUpload(e)}>Upload</button>
              </div>
              <div className="img-render">
                {kycImageArray.map((image, index) => (
                  <img
                    key={index}
                    src={kycImageArray[index]}
                    alt={`img + ${index}`}
                  />
                ))}
              </div>
            </ImageUploadStyle>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}

const ImageUploadStyle = styled.div`
  .img-input {
    display: flex;
    justify-content: center;
  }

  .img-render {
    margin: 1.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1rem;

    img {
      max-width: 100%;
      min-width: 250px;
    }
  }
`;
