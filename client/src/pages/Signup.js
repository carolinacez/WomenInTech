import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import Auth from "../utils/auth";
import { SIGNUP_USER } from "../utils/mutations";

function Signup() {
  const [initialState, setState] = useState({ email: "", password: "" });
  const [signupUser] = useMutation(SIGNUP_USER);

  const signupForm = async (event) => {
    event.preventDefault();
    const userResponse = await signupUser({
      variables: {
        username: initialState.username,
        email: initialState.email,
        password: initialState.password,
      },
    });
    const token = userResponse.data.addUser.token;
    Auth.login(token);
  };

  const submitForm = (event) => {
    const { name, value } = event.target;
    setState({
      ...initialState,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="padding">
        <h2 class="signup-login uk-legend">Signup</h2>
        <form class="uk-form-horizontal uk-margin-large" onSubmit={signupForm}>
          <div class="uk-margin">
            <label class="login-font uk-form-label" for="form-horizontal-text">
              Username:
            </label>
            <input
              class="uk-input uk-form-danger uk-form-width-large"
              placeholder="Enter Username"
              name="username"
              type="username"
              id="username"
              onChange={submitForm}
            />
          </div>
          <div class="uk-margin">
            <label class="login-font uk-form-label" for="form-horizontal-text">
              Email:
            </label>
            <input
              class="uk-input uk-form-danger uk-form-width-large"
              placeholder="Enter email@emails.com"
              name="email"
              type="email"
              id="email"
              onChange={submitForm}
            />
          </div>
          <div class="uk-margin">
            <label class="login-font uk-form-label" for="form-horizontal-text">
              Password:
            </label>
            <input
              class="uk-input uk-form-danger uk-form-width-large"
              placeholder="Password"
              name="password"
              type="password"
              id="password"
              onChange={submitForm}
            />
          </div>
          <div class="uk-margin">
            <button class="login-font uk-button uk-button-danger" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
