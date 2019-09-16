import React from 'react'
import { css } from '@emotion/core';
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';

export default function WaitForVerification({steps, setSteps}) {
    return (
        <div>
            <WaitStyled>
                <div className="left">
                <ClipLoader
          
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
      
        />
            </div>
            <div className="right">
          
        <h2>Staff are reviewing your ID and will approve your account in 1 - 3 business days. </h2>
            <h3>If you have any problems contact us at :phone number</h3>
            <h4 className="try-again">Not happy with your submitted ID click back to re-upload</h4>
            <button onClick={() => setSteps(steps -1)}>back</button>
        </div>
</WaitStyled>

        </div>
    )
}

const WaitStyled = styled.div`

display: flex;
width: 100vw;
height: 90vh;
justify-content: center;
align-items: center;


.left {
    margin: 5rem;
}

.try-again {
    margin-top: 2rem;
    color: red;
}

`