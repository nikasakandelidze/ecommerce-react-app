import React from 'react'
import './CartItem.scss'

const CartItem = props => {
    return (
        <div className='cart-item'>
            <div>
                Name: {props.item.name}
            </div>
            <div>
                price: {props.item.price}
            </div>
        </div>
    );
}

export default CartItem;