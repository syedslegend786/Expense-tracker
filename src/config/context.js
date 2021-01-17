import React, { createContext, useReducer } from 'react';
import AppReducer from './reducer';

let GlobalTransaction = {
    transactions: []
}

export const GlobalContext = createContext(GlobalTransaction);


export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,GlobalTransaction);
    const del_transaction=(id)=>{
        dispatch({
            type: "DELETE",
            payload:id,
        })
    }
    const add_transaction=(obj)=>{
        dispatch({
            type: "ADD",
            payload: obj
        })
    }


    return(
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            del_transaction,
            add_transaction
        }}>
            {children}
        </GlobalContext.Provider>

    )
}