import React from 'react';
import { Button, Form, Grid, Header as SemanticHeader, Segment } from 'semantic-ui-react';
import Header from '../../components/header/header.component'

const RegisterUI = ({ form: { form, onChange, registerFormValid, onSubmit, loading, fieldErrors } }) => {
    return (
        <div>
            <Header />
            <Grid centered>
                <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
                    <SemanticHeader>
                        Signup Here
                    </SemanticHeader>
                    <Segment>
                        <Form>
                            <Form.Field>
                                <Form.Input
                                    value={form.username || ''}
                                    onChange={onChange}
                                    error={
                                        fieldErrors?.username && {
                                            content: fieldErrors.username,
                                            pointing:'below'
                                        }
                                    }
                                    name='username' label='Username' placeholder='Username' />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    value={form.firstName || ''}
                                    onChange={onChange}
                                    error={
                                        fieldErrors?.first_name && {
                                            content: fieldErrors.first_name,
                                            pointing:'below'
                                        }
                                    }
                                    name='firstName' label='First Name' placeholder='First Name' />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    value={form.lastName || ''}
                                    onChange={onChange}
                                    error={
                                        fieldErrors?.last_name && {
                                            content: fieldErrors.last_name,
                                            pointing:'below'
                                        }
                                    }
                                    name='lastName' label='Last Name' placeholder='Last Name' />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    value={form.email || ''}
                                    onChange={onChange}
                                    error={
                                        fieldErrors?.email && {
                                            content: fieldErrors.email,
                                            pointing:'below'
                                        }
                                    }
                                    name='email' type='Email' label='Email' placeholder='Email' />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    value={form.password || ''}
                                    onChange={onChange}
                                    error={
                                        fieldErrors?.password && {
                                            content: fieldErrors.password,
                                            pointing:'below'
                                        }
                                    }
                                    name='password' type='Password' label='Password' placeholder='Password' />
                            </Form.Field>
                            <Button
                                loading={loading}
                                onClick={onSubmit} positive fluid
                                disabled={registerFormValid || loading} type='submit'>Submit</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default RegisterUI;