const DEFAULT_CART_DROPDOWN = {
    visible: false,
    cartItems: []
};

const cartReducer = (state = DEFAULT_CART_DROPDOWN, action) => {
    if (action.type === 'CHANGE_CART_DROPDOWN_VISIBILITY') {
        console.log(action.payload + action.type)
        return {
            ...state,
            visible: action.payload
        }
    }else if(action.type === 'ADD_ITEM_IN_CART'){
        return{
            ...state,
            cartItems: [ ...state.cartItems, action.payload]
        }
    }
    return state;
};

export default cartReducer;