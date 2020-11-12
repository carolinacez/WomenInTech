import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import Auth from "../utils/auth";
import { LOGIN_USER } from "../utils/mutations";

function Login() {
  const [initialState, setState] = useState({ email: "", password: "" });
  const [login] = useMutation(LOGIN_USER);

  const loginForm = async (event) => {
    event.preventDefault();
    try {
      const response = await login({
        variables: {
          email: initialState.email,
          password: initialState.password,
        },
      });
      const token = response.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const change = (event) => {
    const { name, value } = event.target;
    setState({ ...initialState, [name]: value });
  };

  return (
    <div>
      <div className="padding">
        <h2 class="signup-login uk-legend">Login</h2>
        <form class="uk-form-horizontal uk-margin-large" onSubmit={loginForm}>
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
              onChange={change}
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
              onChange={change}
            />
          </div>
          <div class="uk-margin">
            <button class="login-font uk-button uk-button-danger" type="submit">
              login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
