import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import Header from '../../../components/header/header.component';
import { GlobalContext } from '../../../context/Provider';
import { getContacts } from './contacts.action';

const Contacts = () => {
    const context = useContext(GlobalContext);
    console.log('context',context);
    const history = useHistory()

    useEffect(()=>{
        getContacts(history)
    },[])

    return (
        <div>
            <Header/>
            <h1>Contacts</h1>
        </div>
    );
};

export default Contacts;