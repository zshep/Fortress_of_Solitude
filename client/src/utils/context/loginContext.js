import { createContext, useContext } from "react";
import { useLoginReducer } from "../reducers/loginReducer";

const LoginContext = createContext();

const LoginProvider = ({ value = [], children, ...props}) => {
    const [loginState, dispatch] = useLoginReducer({});

    return (
        <LoginContext.Provider value={[loginState, dispatch]} {...props}>
            {children}
        </LoginContext.Provider>
    )
}

const useLoginContext = () => useContext(LoginContext);

export { LoginProvider, useLoginContext }