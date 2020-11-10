import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';
// import { ADD_TO_CART } from "../../utils/actions";

function Item(item) {

    const [cart, setCart] = useState([])
    console.log(cart);
    const { image, name, _id, price} = item; 

    const addToCart = (item) => {
        setCart([...cart, item]);
        console.log(item); 
    }


    return ( 
        <div> 
            <Link to={`/products/${_id}`}>
                <img
                alt={name}
                src={`/images/${image}`} />
               <p>{name}</p> 
            </Link>
            <div>
            <span>${price}</span>
            </div>
            <input type='submit' value='add' onClick={() => addToCart(item)} />
            <input type='submit' value='remove'  />
        </div>

    )
}

export default Item;