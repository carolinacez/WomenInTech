import React, {useState, useEffect} from "react";
import { QUERY_PRODUCTS} from '../../utils/queries'
import { useQuery } from '@apollo/react-hooks';
import { Link } from "react-router-dom";


function ProductList({addToCart}) {


    const { data } = useQuery(QUERY_PRODUCTS)
    const products = data && data.products ? data.products : []


    const listItems = products.map((product, i) => (
        <div key={`${i}`}>
                <img
                alt={product.name}
                src={`/images/${product.image}`} />
                 <p>{product.name}</p>
              <Link to={'/cart'}><input type="submit" value='add' onClick={()=> addToCart(product)}></input></Link>
        </div>
    ))



    return (
        <div>            
            <h2>Merch:</h2>
        <div>{listItems}</div>
        </div> 
)
}

export default ProductList; 

