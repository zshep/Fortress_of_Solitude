import { useReducer } from "react";
//import actions from actions.js
import { LOGIN, LOGOUT } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    //cases go here
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        testing: "Reducer tested",
        token: action.token,
        user: action.user,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        token: "",
        user: {}
      };
    default:
      return state;
  }
};

export function useLoginReducer(initialState) {
  return useReducer(reducer, initialState);
}
