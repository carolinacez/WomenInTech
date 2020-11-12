import React, { useEffect } from "react";
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
      return 'Subtotal: $' + sum;
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
            <img alt={product.name} src={`/images/${product.image}`} />
            <p>{product.name}</p>
            <strong> Price: ${product.price}</strong>

            <div>
              <input
                type="submit"
                value="remove"
                onClick={() => removeFromCart(product)}
              ></input>
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
      {cartItems()}
      <div>{cartTotal()}</div>
    </div>
  );
}

export default Cart;
