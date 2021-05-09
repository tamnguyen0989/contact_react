import React from 'react';
import axiosInstance from '../../helpers/axios'
import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from '../../constants/actionTypes/actionTypes'

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
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: REGISTER_ERROR,
                payload: err.response.data
            })
        })
};