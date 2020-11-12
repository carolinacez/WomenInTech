import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import logo from '../../assets/logo_crop_girl_code.PNG'

function Nav(props) {
  function showNav() {
    console.log(props);
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
            <Link to="/cart">Cart ({props.cart.length})</Link>
          </button>
          <button class="uk-button uk-button-secondary" href="/" onClick={() => Auth.logout()}>
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div className="uk-button-group p-text" >
          <button className="uk-button uk-button-danger">
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>About Us</Link>
          </button>
          <button className="uk-button uk-button-danger">
            <Link to="/products" style={{ textDecoration: 'none', color: 'black' }}>Products</Link>
          </button >
          <button className="uk-button uk-button-danger">
            <Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>Signup</Link>
          </button>
          <button className="uk-button uk-button-danger">
            <Link to="/login" style={{ textDecoration: 'none', color: 'black' }} >Login</Link>
          </button>
        </div>
      );
    }
  }
  return (
    <header className="navigation">
      <div>
       <Link to="/" style={{ textDecoration: 'none' }}>
          <img className='logo'
          alt ="logo"
          src={logo}
          />
        </Link>
        <hr class="uk-divider-small"></hr>
        </div>

      <nav>{showNav()}</nav>
    </header>
  );
}

export default Nav;
