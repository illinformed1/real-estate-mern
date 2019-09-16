import React from "react";
import styled from "styled-components";
import KycUpload from "./kyc-upload";
export default function KycForm({ steps, setSteps }) {
  return (
    <KycStyles>
      <div className="left">
      <h2 className="doc-dets">Document Details Forum</h2>
        <h3>Take 2 clear photos of your ID</h3>
        <h4>Photo 1 : selfie verification</h4>
        <ul>
          <li>
            Hold your ID just under your chin and get someone else to take a
            photo
          </li>
          <li>ID details must be readable</li>
          <li>
            On a piece of paper write "ID RealEstate Verification" and hold it
            next to your ID
          </li>
        </ul>
        <h4>Photo 2 : ID close up</h4>
        <ul>
          <li>Close up of your ID</li>
          <li>ID details must be readable</li>
          <li>
            On a piece of paper write "ID RealEstate Verification" and hold it
            next to your ID
          </li>
        </ul>
       
      </div>
      <div className="right">
       
        <h2>Selfie Verification</h2>
        <img
          src="/selfie-verification.png"
          alt="selfie-verification"
          height="300px"
          width="300px"
        />
        <KycUpload steps={steps} setSteps={setSteps}/>
      </div>
      
    </KycStyles>
  );
}

const KycStyles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
  justify-items: center;

  margin-top: 5rem;

  .left {
    
   
    .doc-dets {
      margin-bottom: 3rem;
     
    }

    h3 {
      margin-bottom: 2rem;
    }
  }

  .right {
    text-align: center;
    
  }
`;
