import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/Provider';

const Login = () => {
    const {
        authState: {
            auth: {
                loading, data, error
            }
        }
    } = useContext(GlobalContext)

    return (
        <div>
            <h1>
                {data ? `Welcome ${data.username}` : "Login Here"}
            </h1>
            {
                !data && <Link to='/auth/register' >Register</Link>
            }
        </div>
    );
};

export default Login;