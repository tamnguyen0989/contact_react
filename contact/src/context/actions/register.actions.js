import React from 'react';
import axiosInstance from '../../helpers/axios'
import { REGISTER_LOADING } from '../../constants/actionTypes/actionTypes'

export const register = ({
    username,
    firstName: first_name,
    lastName: last_name,
    email,
    password
}) => (dispatch) => {
    dispatch({
        type: REGISTER_LOADING
    })
    axiosInstance.post('/auth/register', {
        username,
        first_name,
        last_name,
        email,
        password
    })
        .then()
        .catch(err => console.log('e', err))
};