import { useReducer } from "react";
import { LOGIN_USER } from "../actions";

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case LOGIN_USER:
            state = payload
            return state
        default:
            return state
    }
}

export function useLoginReducer(initialState) {
    return useReducer(reducer, initialState)
}