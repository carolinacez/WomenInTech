import React from "react";
import Auth from "../utils/auth";

function Cart({ cart, removeFromCart, addToCart }) {
  console.log(cart);

  // function productQuant() {
  //     let blueshirt = [];
  //     let whiteshirt = [];
  //     let backpack = [];
  //     let hat = [];
  //     let greyhoodie = [];
  //     let blackhoodie = [];

  //     for (var i = 0; i < cart.length; i++) {
  //         if (cart[i].name === 'girl_code blue t-shirt') {
  //             blueshirt.push(cart[i])
  //         } else if {

  //         }
  //     }

  // }

  function cartTotal() {
    if (cart.length > 0) {
      console.log(cart.length);
      var sum = 0;

      let i = 0;
      while (i < cart.length) {
        sum += cart[i].price;
        i++;
      }
      return "Subtotal: $" + sum;
    } else {
      //   console.log("Nothing in cart!");
      return "Nothing in cart!";
    }
  }

  function cartItems() {
    if (Auth.loggedIn()) {
      return cart && cart.length ? (
        cart.map((product, i) => (
          <div className="cartSum" key={`${product._id} ${i}`}>
            <div className="center-products">
              <div className="product-card uk-child-width-1-2@m" uk-grid>
                <div>
                  <div className="uk-card uk-card-default">
                    <div className="uk-card-media-top">
                      <img
                        alt={product.name}
                        src={`/images/${product.image}`}
                      />
                    </div>
                    <p className="font">{product.name}</p>
                    <p className="font"> Price: ${product.price}</p>
                    <input
                      className="uk-button uk-button-danger"
                      type="submit"
                      value="remove"
                      onClick={() => removeFromCart(product)}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <span></span>
      );
    }
  }
  return (
    <div>
      <div className="background-color">
        <h1 className="merch-title">
          Cart:<div className="nothinginthcart">{cartTotal()}</div>
        </h1>
      </div>
      {cartItems()}
    </div>
  );
}

export default Cart;
