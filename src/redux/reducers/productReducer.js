import { ActionTypes } from "../contants/action-types";

const initialState = {
    products: [],
    favorites: [],
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload}
        case ActionTypes.ADD_TO_FAVORITES:
            return {...state, favorites: [...state.favorites, payload]}
        default:
            return state
    }
}