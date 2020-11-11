import React, {useEffect} from 'react';
import Auth from '../utils/auth'; 

function Cart({ cart, removeFromCart, addToCart }) {
    


    useEffect(() => {
     
        if(cart.length > 0) {
            // console.log(cart.length)
        var sum = 0;

        for (var i = 0; i < cart.length; i++) {
            // console.log(cart[i].price )
              sum += (cart[i].price) 
            // sum += parseInt(cart.price)
            // console.log(sum)
            // return `You clicked ${sum} times`;
            document.title = `Your cart total is ${sum}`;
            // var boldElement = React.createElement('p', null, `${sum}`);
            // console.log(boldElement)
        }
        } else { 
            console.log('nothing in cart')
        }
        

    }, [cart, addToCart]) 


    function cartItems() { 
        if (Auth.loggedIn()) {
            return (
        cart && cart.length ? (cart.map((product, i) => (
        
        <div key={`${product._id} ${i}`}>
            <img
                alt={product.name}
                src={`/images/${product.image}`} />
            <p>{product.name}</p>
            {/* <strong> Total:{product.price}</strong> */}
            

            <div>
                
            <input type="submit" value='remove' onClick={() => removeFromCart(product)}></input>
            
            </div>
        </div>
    ))) : <span></span> )}}
    return (


        <div>
            {cartItems()}
            

        </div>
    )
}

export default Cart; 