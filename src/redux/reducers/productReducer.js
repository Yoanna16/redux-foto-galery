import { ActionTypes } from "../contants/action-types";

const initialState = {
    albums: [],
    favorites: [],
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_ALBUMS:
            return {...state, albums: payload}
        case ActionTypes.ADD_TO_FAVORITES:
            return {...state, favorites: [...state.favorites, payload]}
        default:
            return state
    }
}