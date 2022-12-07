import React, { createContext, useContext } from "react";
import { useLoginReducer } from "./reducers";

const LoginContext = createContext();

const LoginProvider = ({ value = [], children, ...props }) => {
  const [loggedIn, dispatch] = useLoginReducer({
    isLoggedIn: false,
    testing: "",
  });

  return (
    <LoginContext.Provider value={[loggedIn, dispatch]} {...props}>
      {children}
    </LoginContext.Provider>
  );
};

const useLoginContext = () => useContext(LoginContext);

export { LoginProvider, useLoginContext };
