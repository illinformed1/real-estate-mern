import React, { useState, useEffect } from "react";
import { storage } from "../firebase/index";
import styled from "styled-components";
import {useDidMountEffect} from "./hooks/hooks"

export default function ImageUpload({ setImageURL }) {
  const [files, setFiles] = useState([]);

  const [uploadProgress, setUploadProgress] = useState(0);

  const [urlArray, addUrl] = useState([]);

  useDidMountEffect(() => {

    handleUpload();
   
  },[files]);
 

  let handleUpload = () => {
    
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
            addUrl(oldArray => [...oldArray, url]);
          });
      }
    );
  };

  let handleSubmit = e => {
    e.preventDefault();
    if (e.target.files[0]) {
      setFiles(e.target.files[0]);
    }
   
  };

  return (
    <div>
      {setImageURL(urlArray)}

      <ImageUploadStyle>
        <div className="img-input">
          <input type="file" onChange={e => handleSubmit(e)} />

 <button onClick={e => handleUpload(e)}>Upload</button> 
        </div>
        <div className="img-render">
          {urlArray.map((image, index) => (
            <img src={urlArray[index]} alt={`img + ${index}`} />
          ))}
        </div>
      </ImageUploadStyle>
    </div>
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
