import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
// import logo from './logo_girl_code.png';
import Nav from "./components/Nav";
import Aboutus from "./pages/Aboutus";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Products from "./components/Products";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri:
    process.env.NODE_ENV === "production"
      ? "/graphql"
      : "http://localhost:3001/graphql",
});

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(item);
  };

  const removeFromCart = (product) => {
    let copy = [...cart];
    copy = copy.filter((cartItem) => cartItem._id !== product._id);
    setCart(copy);
  };

  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav cart={cart} />
        <Switch>
          <Route exact path="/" component={Aboutus} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route
            exact
            path="/cart"
            component={() => (
              <Cart
                cart={cart}
                setCart={setCart}
                removeFromCart={removeFromCart}
              />
            )}
          />
          <Route
            exact
            path="/products"
            component={() => <Products cart={cart} addToCart={addToCart} />}
          />
          <div className="App">
            <header className="App-header"></header>
            <body></body>
          </div>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
