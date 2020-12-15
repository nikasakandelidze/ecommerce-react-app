
const INITIAL_STATE = {
    currentUser:null
};

const userReducer = (state=INITIAL_STATE, action) =>{
    switch (action.type){
        default:
            return state;
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
    }
};

export default userReducer;