import React from 'react'; 

function Cart({cart, removeFromCart}) { 
    console.log(cart)
    


    const cartItems = cart && cart.length ? ( cart.map((product, i) => (
        <div key={`${product._id} ${i}`}>
                <img
                alt={product.name}
                src={`/images/${product.image}`} />
                 <p>{product.name}</p>
                 <input type="submit" value='remove' onClick={()=> removeFromCart(product)}></input>

                 <div>
                     <strong> Total: ${product.price}</strong>
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