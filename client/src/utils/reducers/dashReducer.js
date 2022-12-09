import { useReducer } from "react";
//import actions from actions.js
import { DASH_DISPLAY } from "../actions";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    //cases go here
    case DASH_DISPLAY:
        state = payload
      return state
    default:
      return state;
  }
};

export function useDashReducer(initialState) {
  return useReducer(reducer, initialState);
}