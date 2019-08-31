import React, { useState } from "react";
import styled from "styled-components";

export default function SignupForm({
  generateVerification,
  phoneConfirmation,
  setCode
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <FormStyling>
      <form className="border border-info p-5">
        <h3>To Sell On Our Platform </h3>

        <h2>Create An Account</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <div class="form-group">
            <label for="InputFirstName">FIRST NAME</label>
            <input
              type="text"
              class="form-control transparent-input"
              id="InputFirstName"
              placeholder="first name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">LAST NAME</label>
            <input
              type="text"
              class="form-control transparent-input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="last name"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">EMAIL</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">PASSWORD</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">PHONE NUMBER</label>
          <input
            type="text"
            class="form-control "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="number"
          />
        </div>

        <label>Enter Phone Confirmation</label>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            class="form-control "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Code"
            onChange={e => setCode(e.target.value)}
          />
          <button onClick={e => generateVerification(e)}>One Time Code</button>
        </div>
        <button
          onClick={e => {
            phoneConfirmation(e, email, password);
          }}
          class="btn btn-info"
        >
          Submit
        </button>
        <p>
          by creating an account you agree to all our{" "}
          <a href="#">terms and condition</a> and our{" "}
          <a href="#">privacy policiy</a>{" "}
        </p>
        <div id="recaptcha-container" />
      </form>
    </FormStyling>
  );
}

const FormStyling = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100vh;
  background: #141618;
  color: white;
  align-items: center;

  form {
    background: linear-gradient(#09476f, #2e8c8a);
  }
  h3 {
    text-align: center;
  }
  h2 {
    margin-bottom: 3rem;
    text-align: center;
  }

  .border {
    border-width: 5px !important;
  }
`;
