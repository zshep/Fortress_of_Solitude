import React, { createContext, useContext } from "react";
import { useAppReducer } from "./reducers";


const AppContext = createContext();
const { Provider } = AppContext;

const AppProvider = ({ value = [], ...props}) => {
    const [state, dispatch] = useAppReducer({
        isLoggedIn: false
    })

    return <Provider value={[state, dispatch]} {...props} />
}

const useAppContext = () => useContext(AppContext)

export { AppProvider, useAppContext }