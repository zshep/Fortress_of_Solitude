import React, { createContext, useContext } from "react";
import { useDashReducer } from "../reducers/dashReducer";

const DashContext = createContext();

const DashProvider = ({ value = [], children, ...props }) => {
  const [dashState, dispatch] = useDashReducer("");

  return (
    <DashContext.Provider value={[dashState, dispatch]} {...props}>
      {children}
    </DashContext.Provider>
  );
};

const useDashContext = () => useContext(DashContext);

export { DashProvider, useDashContext };