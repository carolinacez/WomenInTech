import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
// import logo from './logo_girl_code.png';
import Nav from "./components/Nav";
import Aboutus from "./pages/Aboutus";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Products from "./components/Products"
import Details from "./pages/Details"; 

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})


function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <Nav />
      <Switch>
       <Route exact path="/" component={Aboutus} /> 
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/signup" component={Signup} />
         {/* <Route exact path="/cart" component={Cart} /> 
        <Route exact path ="/products" component={Products} /> 
        <Route exact path="/products/:id" component={Details} />  */}
    <div className="App">
      <header className="App-header">
   

      </header>
    </div>
    </Switch>
    </Router>
    </ApolloProvider>
  );
      }

export default App;
