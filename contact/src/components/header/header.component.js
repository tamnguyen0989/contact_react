import React from 'react';
import { Button, Icon, Image, Menu } from 'semantic-ui-react';
import logo from '../../assets/images/logo.svg'
import { Link, useLocation } from 'react-router-dom'

import isAuthenticated from '../../../src/utils/isAuthenticated'

const Header = () => {
    const { pathname } = useLocation()

    return (
        <Menu secondary pointing>
            <Image src={logo} width={50} />
            <Menu.Item as={Link} to='/' style={{ fontSize: 20 }}>TrulyContacts</Menu.Item>
            {
                pathname === '/' && (
                    <Menu.Item >
                        <Button as={Link} to='/contacts/create' icon positive>
                            <Icon name='add'></Icon>Create Contact
                        </Button>
                    </Menu.Item>)
            }
            {
                isAuthenticated() && (
                    < Menu.Item position='right'>
                        <Button icon negative>
                            <Icon name='log out'></Icon>Logout
                        </Button>
                    </Menu.Item>)
            }
        </Menu >
    );
};

export default Header;