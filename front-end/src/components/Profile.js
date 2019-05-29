import React from 'react';
import { Form, Button, Tab } from 'react-bootstrap';
const ProfileForm = () => {
    return (
        <Tab.Pane eventKey="profile">
            <Form action='/path'>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label >Email address</Form.Label>
                    <Form.Control type="email" placeholder="example@gmail.com" disabled />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Account</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                        disabled
                    />
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                    </Form.Control.Feedback>
                    <Form.Control type="password" placeholder="Old password" name='old_password' />
                    <Form.Control type="password" placeholder="New password" name='new_password' />
                    <Form.Control type="password" placeholder="Confirm new password" name='confirm_password' />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Update
                </Button>
            </Form>
        </Tab.Pane>
    );
}

export default ProfileForm;