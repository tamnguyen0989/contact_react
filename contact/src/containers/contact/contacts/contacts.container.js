import React, { useContext } from 'react';
import Header from '../../../components/header/header.component';
import { GlobalContext } from '../../../context/Provider';

const Contacts = () => {
    const context = useContext(GlobalContext);
    console.log('context',context);

    return (
        <div>
            <Header/>
            <h1>Contacts</h1>
        </div>
    );
};

export default Contacts;