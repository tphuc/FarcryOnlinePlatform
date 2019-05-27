import React from 'react';
import { Navbar, Nav, Form,  Button } from 'react-bootstrap';
import store from '../redux/store';
import {logout} from '../redux/actions/auth'
import { connect } from 'react-redux';


const handleLogout = (e) => {
    e.preventDefault();
    store.dispatch(logout());
    window.location.href = '/login'
}
const Navigator = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Farcry Online</Navbar.Brand>
            {
                !props.isAuthenticated ?
                (<Button href='/login' className='ml-auto' variant="outline-info">Login</Button>):
                (<Button  className='ml-auto' variant="outline-info" onClick={handleLogout} >Logout</Button>)
            }
            
        </Navbar>
    )
}

const mapStateToProps = (state) => (
    {
        isAuthenticated : state.auth.isAuthenticated
    }
)

export default connect(mapStateToProps)(Navigator);