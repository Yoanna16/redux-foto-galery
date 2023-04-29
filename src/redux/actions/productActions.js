import { ActionTypes } from "../contants/action-types"  


export const setAlbums  = (albums) => {
    return {
        type: ActionTypes.SET_ALBUMS,
        payload: albums,
    }
}

export const addToFavorites = (favorites) => {
    return {
        type: ActionTypes.ADD_TO_FAVORITES,
        payload: favorites,
    }
}