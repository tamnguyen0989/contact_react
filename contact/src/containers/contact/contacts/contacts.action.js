import axiosInstance from "../../../helpers/axiosInstance"

export const getContacts = () => {
    axiosInstance.get('/contacts')
        .then((res) => console.log('data', res.data))
        .catch((err) => console.log('err', err))
}