import React from 'react';
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Signup() {
    return (
        <Form className='form'>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Group controlId="formBasicRange">
                <Form.Label>Cat chunkiness prefered</Form.Label>
                <Form.Control type="range" />
            </Form.Group>
            <Button variant="dark" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Signup;