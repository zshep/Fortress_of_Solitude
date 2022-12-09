import { useReducer } from "react";
//import actions from actions.js
import { ACTIVATE_NAV } from "../actions";

export const reducer = (state, action) => {
  switch (action.type) {
    //cases go here
    case ACTIVATE_NAV:
      return {
        ...state,
        isActive: !state.isActive,
      };
    default:
      return state;
  }
};

export function useNavReducer(initialState) {
  return useReducer(reducer, initialState);
}
