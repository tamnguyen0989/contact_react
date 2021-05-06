import React from 'react';
import axiosInstance from '../../helpers/axios'

export const register = () => {
    axiosInstance.post('/auth/register')
        .then()
        .catch(err => console.log('e', err))
};