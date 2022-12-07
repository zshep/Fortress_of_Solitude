import React, { createContext, useContext } from "react";
import { useLoginReducer } from "./reducers";

const LoginContext = createContext();

const LoginProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useLoginReducer({
    isLoggedIn: false,
    testing: "",
  });

  return (
    <LoginContext.Provider value={[state, dispatch]} {...props}>
      {children}
    </LoginContext.Provider>
  );
};

const useLoginContext = () => useContext(LoginContext);

export { LoginProvider, useLoginContext };
