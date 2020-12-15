import React from "react";
import {ReactComponent as ShoppingIcon} from "../shopping-bag.svg"
import './CartIcon.scss'
import {connect} from "react-redux";
import cartVisibleAction from "../my-redux/cart/cart-action";

const CartIcon  = (props) => {
    return (<div onClick={ e=> props.isDropDownCartVisible ? props.makeCartDropDownVisible(false) : props.makeCartDropDownVisible(true)} className='cart-icon'>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>);
};

const mapStateToProps = state => {
    return {
        isDropDownCartVisible: state.cartVisible.visible
    };
}

const mapDispatchToProps = dispatch => {
    return {
        makeCartDropDownVisible: visible => dispatch(cartVisibleAction(visible))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);