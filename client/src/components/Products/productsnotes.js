// import React, {useState, useEffect} from "react";
// // import { useDispatch, useSelector } from 'react-redux'
// import Item from '../Item'
// import { QUERY_PRODUCTS} from '../../utils/queries'
// import { useQuery } from '@apollo/react-hooks';
// // import { ADD_TO_CART } from "../../utils/actions";

// function ProductList() {
//     // const dispatch = useDispatch();
//     // const state = useSelector(state => state);

//     // const { products } = state



//     const { data, loading } = useQuery(QUERY_PRODUCTS)
//     const products = data && data.products ? data.products : []


//     return (
//         <div>
//             <h2>Merch:</h2>
//             <div>
//                 {products.map(product => (
//                     <Item
//                         key={product._id}
//                         _id={product._id}
//                         image={product.image}
//                         name={product.name}
//                         price={product.price}
//                         quantity={product.quantity}
//                     />
//                 ))}
//             </div>
//         <input type='submit' value='add' onClick={() =>addToCart(product)} />
  
//         </div>
//     )
// }

// export default ProductList; 