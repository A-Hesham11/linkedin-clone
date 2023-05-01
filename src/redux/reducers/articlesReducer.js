import * as types from "../actions/actionTypes";

export const initialState = {
    loading: false,
    articles:[],
}

const articlesReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SET_LOADING_STATUS:
            return {
                ...state,
                loading: action.status,
            }
        case types.GET_ARTICLES:
            return {
                ...state.articles,
                articles: action.payload,
            }
        default:
            return state;
    }
}

export default articlesReducer



