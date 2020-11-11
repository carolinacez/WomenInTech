import React, {useEffect} from 'react';

function Cart({ cart, removeFromCart, addToCart }) {
    console.log(cart)


    useEffect(() => {
     
        if(cart.length > 0) {
            // console.log(cart.length)
        var sum = 0;

        for (var i = 0; i < cart.length; i++) {
            // console.log(cart[i].price )
              sum += (cart[i].price) 
            // sum += parseInt(cart.price)
            // console.log(sum)
            document.title = `Your cart total is ${sum}`;
        }
        } else { 
            console.log('nothing in cart')
        }
        

    }, [cart, addToCart]) 
    

    const cartItems = cart && cart.length ? (cart.map((product, i) => (
        <div key={`${product._id} ${i}`}>
            <img
                alt={product.name}
                src={`/images/${product.image}`} />
            <p>{product.name}</p>
            <input type="submit" value='remove' onClick={() => removeFromCart(product)}></input>

            <div>
    <strong> Total:{product.price}</strong>
            </div>
        </div>
    ))) : <span></span>
    return (


        <div>
            {cartItems}
            

        </div>
    )
}

export default Cart; 