import axiosInstance from "../../../helpers/axiosInstance"

export const getContacts = (history) => {
    axiosInstance(history).get('/contacts/')
        .then((res) => console.log('data', res.data))
        .catch((err) => console.log('err', err))
}