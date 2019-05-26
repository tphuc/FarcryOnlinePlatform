import React from 'react';
import { Navbar, Nav, Form,  Button } from 'react-bootstrap';

const Navigator = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Farcry Online</Navbar.Brand>
            <Button href='/login' className='ml-auto' variant="outline-info">Login</Button>

        </Navbar>
    )
}

export default Navigator;