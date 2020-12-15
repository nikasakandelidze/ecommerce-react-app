const DEFAULT_CART_DROPDOWN={
  visible:false
};

const cartReducer = (state=DEFAULT_CART_DROPDOWN, action) => {
    if(action.type==='CHANGE_CART_DROPDOWN_VISIBILITY'){
        return {
            visible:action.visible
        }
    }
    return state;
};

export default cartReducer;