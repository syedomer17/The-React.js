import {LIKE_POST,UNLIKE_POST} from "./Actions"

const initialSate = {
    likes:0,
}

export const likeReducer = (state = initialSate,action) => {
    switch(action.type){
        case LIKE_POST:
            return {...state,likes:Math.max(1,state.likes + 1)};
        case UNLIKE_POST:
            return {...state,likes:Math.max(0,state.likes - 1)};
        default:
            return state
    }
}