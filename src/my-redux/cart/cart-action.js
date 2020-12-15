export const cartVisibleAction = visible => {
    return {
        type: 'CHANGE_CART_DROPDOWN_VISIBILITY',
        payload: visible
    };
}


export const addItem = item => {
    return {
        type: 'ADD_ITEM_IN_CART',
        payload: item
    }
}

