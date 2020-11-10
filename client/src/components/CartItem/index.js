// import React from 'react'; 
// import { useDispatch } from 'react-redux';
// // import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions"

// function CartItem () {
//     return (
//         <div></div>
//     )
// }

import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';
// import { ADD_TO_CART } from "../../utils/actions";

function Cart({addToCart, product}) {

    // const [cart, setCart] = useState([])
    // // console.log(cart);
    const { image, name, _id, price} = product; 

    // const addToCart = (item) => {
    //     setCart([cart, {item}]);
    //     console.log(item); 
    // }


    return ( 
        <div> 
            <Link to={`/products/${_id}`}>
                <img
                alt={name}
                src={`/images/${image}`} />
               <p>{name}</p> 
               {/* image={product.image}
                name={product.name}
                price={product.price}
                quantity={product.quantity} */}
            </Link>
            <div>
            <span>${price}</span>
            </div>
            <input type='submit' value='remove'  />
        </div>

    )
}

export default Cart;