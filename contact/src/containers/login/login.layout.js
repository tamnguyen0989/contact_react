import React from 'react';
import { Button, Form, Grid, Header as SemanticHeader, Message, Segment } from 'semantic-ui-react';
import Header from '../../components/header/header.component'

const LoginUI = ({ form: { form, onChange, loginFormValid, onSubmit, loading, fieldErrors, error } }) => {
    return (
        <div>
            <Header />
            <Grid centered>
                <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
                    <SemanticHeader>
                        Login Here
                    </SemanticHeader>
                    <Segment>
                        <Form>
                            {
                                error && <Message negative><p>{error.detail}</p></Message>
                            }
                            <Form.Field>
                                <Form.Input
                                    value={form.username || ''}
                                    onChange={onChange}
                                    error={
                                        fieldErrors?.username && {
                                            content: fieldErrors.username,
                                            pointing: 'below'
                                        }
                                    }
                                    name='username' label='Username' placeholder='Username' />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    value={form.password || ''}
                                    onChange={onChange}
                                    error={
                                        fieldErrors?.password && {
                                            content: fieldErrors.password,
                                            pointing: 'below'
                                        }
                                    }
                                    name='password' type='Password' label='Password' placeholder='Password' />
                            </Form.Field>
                            <Button
                                loading={loading}
                                onClick={onSubmit} positive fluid
                                disabled={loginFormValid || loading} type='submit'>Submit</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default LoginUI;