import { React, useEffect } from 'react';
import { Link } from 'react-router-dom'
import {register} from './register.actions'
import RegisterUI from './register.layout';
import useForm from './register.useForm'

const Register = () => {
    return (
        <RegisterUI form={useForm()} />
    );
};

export default Register;