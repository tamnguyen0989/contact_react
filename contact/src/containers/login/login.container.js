import React, { useContext } from 'react';
import LoginUI from './login.layout';
import useForm from './login.useForm';

const Login = () => {
    return (
        <div>
            <LoginUI form={useForm()} />
        </div>
    );
};

export default Login;