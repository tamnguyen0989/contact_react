import Register from  '../containers/register/register.container'
import Login from '../containers/login/login.container'
import Contacts from '../containers/contact/contacts/contacts.container'
import ContactsCreate from '../containers/contact/contacts-create/contacts-create.container'

const routes = [
    {
        path:'/auth/register',
        component:Register,
        title:'Register'
    },
    {
        path:'/auth/login',
        component:Login,
        title:'Login'
    },
    {
        path:'/',
        component:Contacts,
        title:'Contacts'
    },
    {
        path:'/contacts/create',
        component:ContactsCreate,
        title:'Contacts Create'
    },
]

export default routes