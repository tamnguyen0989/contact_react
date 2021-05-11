import Register from  '../containers/register/register.container'
import Login from '../containers/login/login.container'
import Contacts from '../containers/contact/contacts/contacts.container'
import ContactsCreate from '../containers/contact/contactsCreate/contactsCreate.container'

const routes = [
    {
        path:'/auth/register',
        component:Register,
        title:'Register',
        needsAuth:false
    },
    {
        path:'/auth/login',
        component:Login,
        title:'Login',
        needsAuth:false
    },
    {
        path:'/contacts/create',
        component:ContactsCreate,
        title:'Contacts Create',
        needsAuth:true
    },
    {
        path:'/',
        component:Contacts,
        title:'Contacts',
        needsAuth:true
    },    
]

export default routes