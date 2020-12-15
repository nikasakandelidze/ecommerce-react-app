import React from "react";
import './CartDropDown.scss'


const CartDropDown = () => {
    return (<div className='drop-down-menu'>
        <div className='title'>
            Cart
        </div>
        <div className='list-items'>

        </div>
        <div className='check-out'>
            <button>Checkout</button>
        </div>
    </div>);
};

export default CartDropDown;