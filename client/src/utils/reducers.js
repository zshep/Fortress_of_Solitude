import { useReducer } from "react";
//import actions from actions.js
import { LOGIN } from "./actions";
import Auth from "./auth"

export const reducer = (state, action) => {
  switch (action.type) {
    //cases go here
    case LOGIN: 
      return {
        ...state,
        isLoggedIn: !action.isLoggedIn
      }
    default:
      return state;
  }
};

export function useAppReducer(initialState) {
  return useReducer(reducer, initialState);
}
