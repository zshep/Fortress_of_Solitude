import React, { createContext, useContext } from "react";
import { useNavReducer } from "../reducers/navreducers";

const NavContext = createContext();

const NavProvider = ({ value = [], children, ...props }) => {
  const [navState, dispatch] = useNavReducer({
    isActive: false,
  });

  return (
    <NavContext.Provider value={[navState, dispatch]} {...props}>
      {children}
    </NavContext.Provider>
  );
};

const useNavContext = () => useContext(NavContext);

export { NavProvider, useNavContext };
