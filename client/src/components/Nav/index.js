import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNav() {
    if (Auth.loggedIn()) {
      return (
        <ul>
          <li>
            <Link to="/"><button>About Us</button></Link>
          </li>
          <li>
            <Link to="/products"><button>Products</button></Link>
          </li>
          <li>
            <Link to="/cart"><button>Cart</button></Link>
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
            <Link to="/"><button>About Us</button></Link>
          </li>
         <li>
            <Link to="/products"><button>Products</button></Link>
          </li>
          <li>
            <button>
            <Link to='/signup'>Signup</Link>
            </button>
          </li>
          <li>
            <button>
            <Link to='/login'>Login</Link>
            </button>
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
