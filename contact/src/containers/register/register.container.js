import { React, useEffect } from 'react';
import { Link } from 'react-router-dom'
import {register} from '../../context/actions/register.actions'
import RegisterUI from './register.layout';
import useForm from './useForm'

const Register = () => {
    return (
        <RegisterUI form={useForm()} />
    );
};

export default Register;