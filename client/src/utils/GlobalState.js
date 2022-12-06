import React, { createContext, useContext } from "react";
import { useAppReducer } from "./reducers";

const AppContext = createContext();
const { Provider } = AppContext;

const AppProvider = ({ value = [], ...props}) => {
    const [state, dispatch] = useAppReducer({})
    return <Provider value={[state, dispatch]} {...props} />
}

export { AppProvider }