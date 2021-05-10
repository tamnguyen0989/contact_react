
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from '../../context/Provider'
import { register } from '../register/register.actions'
import { useHistory } from "react-router"
import { login } from "./login.actions"

export default () => {
    const [form, setForm] = useState({})
    const [fieldErrors, setFieldErrors] = useState({})
    const history = useHistory()

    const {
        authState: {
            auth: {
                loading, data, error
            }
        },
        authDispatch,
        authState: {
            auth
        },
    } = useContext(GlobalContext)

    console.log('auth', auth);
    console.log('form', form);

    useEffect(() => {
        for (const item in error) {
            setFieldErrors({
                ...fieldErrors,
                [item]: error[item][0]
            })
        }
    }, [error])

    useEffect(() => {
        if (data)
            if (data.user)
                history.push('/')
    }, [data])

    const onChange = (e, { name, value }) => {
        setForm({
            ...form,
            [name]: value
        })
    }

    const onSubmit = () => {
        setFieldErrors({})
        login(form)(authDispatch)
    }

    const loginFormValid = !form.username?.length || !form.password?.length

    return { form, onChange, loginFormValid, onSubmit, loading, fieldErrors, error }
}