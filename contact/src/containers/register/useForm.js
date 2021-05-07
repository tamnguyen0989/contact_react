import { useContext, useState } from "react"
import { GlobalContext } from '../../context/Provider'
import { register } from '../../context/actions/register.actions'

export default () => {
    const [form, setForm] = useState({})

    const {
        authState: {
            auth: {
                loading
            }
        },
        authDispatch
    } = useContext(GlobalContext)
    console.log('loading', loading);

    const onChange = (e, { name, value }) => {
        setForm({
            ...form,
            [name]: value
        })
    }

    const onSubmit = () => {
        register(form)(authDispatch)
    }

    const registerFormValid = !form.username?.length || !form.firstName?.length || !form.lastName?.length || !form?.username?.length || !form.password?.length

    return { form, onChange, registerFormValid, onSubmit }
}