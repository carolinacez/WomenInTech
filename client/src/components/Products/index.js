import React, {useState, useEffect} from "react";
// import { useDispatch, useSelector } from 'react-redux'
import Item from '../Item'
import { QUERY_PRODUCTS} from '../../utils/queries'
import { useQuery } from '@apollo/react-hooks';

function ProductList() {


    const { data, loading } = useQuery(QUERY_PRODUCTS)
    const products = data && data.products ? data.products : []

    const [cart, setCart] = useState([])
    // console.log(cart);

    const addToCart = (item) => {
        setCart([...cart, item]);
        console.log(item); 
    }

    return (
        <div>
            <h2>Merch:</h2>
            <div>
                {products.map((product) => (
                    <Item
                        key={product._id}
                        _id={product._id}
                        product={product}
                        addToCart={addToCart}
                    />
                ))}
                </div>
        
        </div>
    )
}

export default ProductList; 

