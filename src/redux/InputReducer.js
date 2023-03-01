import {types} from "./types";

const initialState = {
    input: '',
    list: []
}

export default function inputReducer(state = initialState, action){
    switch (action.type) {
        case types.ADD_NUMBER:
            return {...state, list: [...state.list, state.list.length > 0 ? state.list[state.list.length - 1] + ", " + action.payload : action.payload]}
        case types.CLEAR_NUM:
            return {input: '', list: []}
        case types.UPDATE_INP:
            return {...state, input: action.payload}
        default: return state
    }
}