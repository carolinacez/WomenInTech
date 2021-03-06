 import {
 UPDATE_PRODUCTS, 
 ADD_TO_CART, 
 ADD_MULTIPLE_TO_CART, 
 REMOVE_FROM_CART, 
 CLEAR_CART, 
 UPDATE_CART_QUANTITY } from "./actions"


 const initialState = {
    products: [],
    cart: [],
    cartOpen: false
  };
  
  export const reducers = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_PRODUCTS:
        return {
          ...state,
          products: [...action.products],
        };
  
      case ADD_TO_CART:
        return {
          ...state,
          cartOpen: true,
          cart: [...state.cart, action.product],
        };
  
      case ADD_MULTIPLE_TO_CART:
        return {
          ...state,
          cart: [...state.cart, ...action.products],
        };
  
      case UPDATE_CART_QUANTITY:
        return {
          ...state,
          cartOpen: true,
          cart: state.cart.map(product => {
            if (action._id === product._id) {
              product.purchaseQuantity = action.purchaseQuantity
            }
            return product
          })
        };
  
      case REMOVE_FROM_CART:
        let newState = state.cart.filter(product => {
          return product._id !== action._id;
        });
  
        return {
          ...state,
          cartOpen: newState.length > 0,
          cart: newState
        };
  
      case CLEAR_CART:
        return {
          ...state,
          cartOpen: false,
          cart: []
        };
  
        default:
        return state;
    }
  };
  
  export default reducers;