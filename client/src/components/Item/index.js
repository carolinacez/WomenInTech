import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

function Item(item) {
    // const dispatch = useDispatch(); 
    // const state = useSelector(state => state)

    const { image, name, _id, price} = item; 

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
        </div>

    )
}

export default Item;