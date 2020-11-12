import React, { useState, useEffect } from "react";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

function ProductList({ addToCart }) {
  const { data } = useQuery(QUERY_PRODUCTS);
  const products = data && data.products ? data.products : [];

  function listItems() {
    if (Auth.loggedIn()) {
      return products.map((product, i) => (
        <div key={`${i}`}>
          <div className="center-products">
            <div className="product-card uk-child-width-1-2@m" uk-grid>
              <div>
                <div className="uk-card uk-card-default">
                  <div className="uk-card-media-top">
                    <img alt={product.name} src={`/images/${product.image}`} />
                  </div>
                  <div className="uk-card-body">
                    <p className="font">{product.name}</p>
                    <p className="font">${product.price}</p>
                    <input
                      className="uk-button uk-button-danger"
                      type="submit"
                      value="add to cart"
                      onClick={() => addToCart(product)}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ));
    } else {
      return products.map((product, i) => (
        <div key={`${i}`}>
          <div className="center-products">
            <div className="product-card uk-child-width-1-2@m" uk-grid>
              <div>
                <div className="uk-card uk-card-default">
                  <div className="uk-card-media-top">
                    <img alt={product.name} src={`/images/${product.image}`} />
                  </div>
                  <div className="uk-card-body">
                    <p className="font">{product.name}</p>
                    <p className="font">${product.price}</p>
                    <p className="pleaselogin">Please log in or signup to add items to cart!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ));
    }
  }

  return (
    <div>
      <div className="background-color">
        <h1 className="merch-title">Merch:</h1>
      </div>
      <div>{listItems()}</div>
    </div>
  );
}

export default ProductList;
