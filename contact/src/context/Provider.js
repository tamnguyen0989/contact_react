import { createContext, useReducer } from 'react'
import authInitialstates from './initialStates/auth.initialStates';
import contactsInitialstates from './initialStates/contacts.initialStates';
import auth from './reducers/auth.reducers';
import contacts from './reducers/contacts.reducer';

export const GlobalContext = createContext({})

export const GlobalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(
        auth,
        authInitialstates
    )
    const [contactsState, contactsDispatch] = useReducer(
        contacts,
        contactsInitialstates
    )
    return <GlobalContext.Provider
        value={{
            authState,
            authDispatch,
            contactsState,
            contactsDispatch
        }}>
        {children}
    </GlobalContext.Provider>
};