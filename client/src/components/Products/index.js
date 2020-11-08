import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import Item from '../Item'

function ProductList() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const { products } = state

    return (
        <div>
            <h2>Merch:</h2>
            <div>
                {products.map(product => (
                    <Item
                        key={product._id}
                        _id={product._id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        quantity={product.quantity}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductList; 