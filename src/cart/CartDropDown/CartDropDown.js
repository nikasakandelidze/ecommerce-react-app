import React from "react";
import './CartDropDown.scss'
import {connect} from "react-redux";
import CartItem from "./CartItem";

const CartDropDown = (props) => {
    return (<div className='drop-down-menu'>
        <div className='title'>
            Cart
        </div>
        <div className='check-out'>
            <button>Checkout</button>
        </div>
        <div className='list-items'>
        {
            props.cartItems.map(e=><CartItem item={e}/>)
        }
        </div>

    </div>);
};

const mapStateToProps = state =>{
    return{
        cartItems: state.cart.cartItems
    }
}

export default connect(mapStateToProps)(CartDropDown);