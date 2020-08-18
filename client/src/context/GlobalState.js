import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial state 
const initialState = {
    transactions: [
        { id: 1, text: 'Gas', amount: -20 },
        { id: 2, text: 'NintendoSwitch', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'iPad', amount: 700}
    ]
}


//create context
export const GlobalContext = createContext(initialState)


//provider component 
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>)
}