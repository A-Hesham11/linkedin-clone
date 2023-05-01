import * as types from "../actions/actionTypes";

const initialState = {
    user:null,
    error:null,
    loading:false,
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SET_USER:
            return {
                ...state,
                user:action.user,
            } 
        case types.LOGOUT_START:
            return {
                ...state,
                loading:true,
            } 
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loading:false,
                user:action.payload,
            } 
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                user:null,
            }
        case types.LOGOUT_FAIL:
            return {
                ...state,
                error:false,
                error:action.payload,
            } 
        case types.CHANGE_USER:
            return {
                ...state, 
                loading:false,
                user: action.payload
            }
        default:
            return state;
    }
};

export default userReducer