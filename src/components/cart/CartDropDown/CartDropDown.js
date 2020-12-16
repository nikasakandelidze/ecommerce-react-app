import React from "react";
import './CartDropDown.scss'
import {connect} from "react-redux";
import CartItem from "./CartItem";
import {withRouter} from 'react-router-dom'
import {cartVisibleAction} from "../../../my-redux/cart/cart-action";

const CartDropDown = (props) => {
    return (<div className='drop-down-menu'>
        <div className='title'>
            Cart
        </div>
        <div className='check-out'>
            <button onClick={()=>{
                props.history.push('/checkout');
                props.changeCartVisibility(false);
            }}>Checkout</button>
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


const mapDispatchToProps = dispatch => {
    return {
        changeCartVisibility: visible => dispatch(cartVisibleAction(visible))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropDown));