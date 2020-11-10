import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNav() {
    if (Auth.loggedIn()) {
      return (
        <div class="uk-button-group">
          <button class="uk-button uk-button-danger">
            <Link to="/">About Us</Link>
          </button>
          <button class="uk-button uk-button-danger">
            <Link to="/products">Products</Link>
          </button>
          <button class="uk-button uk-button-danger">
            <Link to="/cart">Cart</Link>
          </button>
          <button class="uk-button uk-button-secondary" href="/" onClick={() => Auth.logout()}>
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div class="uk-button-group">
          <button class="uk-button uk-button-danger">
            <Link to="/">About Us</Link>
          </button>
          <button class="uk-button uk-button-danger">
            <Link to="/products">Products</Link>
          </button>
          <button class="uk-button uk-button-danger">
            <Link to="/signup">Signup</Link>
          </button>
          <button class="uk-button uk-button-danger">
            <Link to="/login">Login</Link>
          </button>
        </div>
      );
    }
  }
  return (
    <header className="navigation">
      <h1>
        <Link to="/">GIRL CODE</Link>
      </h1>

      <nav>{showNav()}</nav>
    </header>
  );
}

export default Nav;
