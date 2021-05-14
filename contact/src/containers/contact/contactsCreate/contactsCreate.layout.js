import React from 'react';
import { Card, Grid, Header as SemanticHeader } from 'semantic-ui-react';
import Header from '../../../components/header/header.component';

const ContactsCreateUI = () => {
    return (
        <div>
            <Header />
            <Grid centered>
                <Grid.Column className='form-column'>
                    <SemanticHeader>Create Contact</SemanticHeader>
                    <Card fluid>
                        <Card.Content>
                            <Form>
                                <Form.Group widths='2'>
                                    <Form.Input fluid label='First name' placeholder='First name' />
                                    <Form.Input fluid label='Last name' placeholder='Last name' />
                                </Form.Group>
                                <Form.Group widths='2'>
                                    <Form.Select
                                        fluid
                                        label='Gender'
                                        options={options}
                                        placeholder='Gender'
                                    />
                                </Form.Group>
                                <Form.TextArea label='About' placeholder='Tell us more about you...' />
                                <Form.Checkbox label='I agree to the Terms and Conditions' />
                                <Form.Button>Submit</Form.Button>
                            </Form>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default ContactsCreateUI;