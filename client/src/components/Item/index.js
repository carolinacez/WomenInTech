import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';
// import { ADD_TO_CART } from "../../utils/actions";

function Item({addToCart, product}) {

    const { image, name, _id, price} = product; 


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
            <Link to={`/cart`}><input type='submit' value='add' onClick={() => addToCart(product)} /></Link>
            <input type='submit' value='remove'  />
        </div>

    )
}

export default Item;