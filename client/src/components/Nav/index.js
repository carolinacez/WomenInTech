import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNav() {
    if (Auth.loggedIn()) {
      return (
        <ul>
          <li>
            <button>About Us</button>
          </li>
          <li>
            <button>Products</button>
          </li>
          <li>
            <button>Checkout</button>
          </li>
          <li>
            <button href='/' onClick={() => Auth.logout()}>Logout</button>
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li>
            <button>About Us</button>
          </li>
          <li>
            <button>
            <Link to='/signup'>Signup/ Login</Link>
            </button>
          </li>
          <li>
            <button>Products</button>
          </li>
        </ul>
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
