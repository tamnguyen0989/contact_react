
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from '../../context/Provider'
import { register } from '../../context/actions/register.actions'
import { useHistory } from "react-router"

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
            history.push('/auth/login')
    }, [data])

    const onChange = (e, { name, value }) => {
        setForm({
            ...form,
            [name]: value
        })
    }

    const onSubmit = () => {
        setFieldErrors({})
        register(form)(authDispatch)
    }

    const registerFormValid = !form.username?.length || !form.firstName?.length || !form.lastName?.length || !form?.username?.length || !form.password?.length

    return { form, onChange, registerFormValid, onSubmit, loading, fieldErrors }
}