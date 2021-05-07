import React from 'react';
import { Button, Form, Grid, Header as SemanticHeader, Segment } from 'semantic-ui-react';
import Header from '../../components/header/header.component'

const RegisterUI = ({ form: { form, onChange, registerFormValid, onSubmit } }) => {
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
                                <Form.Input value={form.username || ''} onChange={onChange} name='username' label='Username' placeholder='Username' />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input value={form.firstName || ''} onChange={onChange} name='firstName' label='First Name' placeholder='First Name' />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input value={form.lastName || ''} onChange={onChange} name='lastName' label='Last Name' placeholder='Last Name' />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input value={form.email || ''} onChange={onChange} name='email' type='Email' label='Email' placeholder='Email' />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input value={form.password || ''} onChange={onChange} name='password' type='Password' label='Password' placeholder='Password' />
                            </Form.Field>
                            <Button onClick={onSubmit} positive fluid disabled={registerFormValid} type='submit'>Submit</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default RegisterUI;