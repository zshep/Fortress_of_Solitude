import { useReducer } from "react";
//import actions from actions.js

export const reducer = (state, action) => {
  switch (action.type) {
    //cases go here
    default:
      return state;
  }
};

export function useAppReducer(initialState) {
  return useReducer(reducer, initialState);
}
