import React from 'react'
import './Checkout.scss'
import {connect} from "react-redux";
import CartItem from "../cart/CartDropDown/CartItem";

const Checkout = props => {
    return (
        <div className='checkout-page'>
           <div>
               <div className='checkout-title'>
                   Your cart
               </div>
               <div className='total'>
                   Total: {props.cartItems.length ===0 ? 0 : props.cartItems.map(e=>e.price).reduce( (a,b) => a + b ) } $
               </div>
           </div>
            <div className='checkout-item'>
                {
                    props.cartItems.map(e=><CartItem key={e.id}item={e}/>)
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return{
        cartItems: state.cart.cartItems
    }
};

export default connect(mapStateToProps)(Checkout);