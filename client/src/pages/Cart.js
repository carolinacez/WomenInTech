import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Item from "../components/Item";
import Products from "../components/Products";
import { QUERY_PRODUCTS} from '../utils/queries';
// import { useDispatch, useSelector } from 'react-redux';
// import { ORDER} from "../../utils/queries";
import { useQuery } from '@apollo/react-hooks';
// import ProductList from "../components/Products" 
// import { useMutation } from '@apollo/react-hooks';
// import { ORDER } from '../utils/mutations';


function Cart({product}) {

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
            <h2>Cart:</h2>
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

export default Cart; 