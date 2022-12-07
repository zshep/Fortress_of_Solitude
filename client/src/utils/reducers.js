import { useReducer } from "react";
//import actions from actions.js
import { LOGIN } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    //cases go here
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        testing: "Reducer tested",
      };
    default:
      return state;
  }
};

export function useLoginReducer(initialState) {
  return useReducer(reducer, initialState);
}
