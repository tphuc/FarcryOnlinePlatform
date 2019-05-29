import React from 'react';
import { Navbar, Nav, Form,  Button, Image } from 'react-bootstrap';
import store from '../redux/store';
import {logout} from '../redux/actions/auth'
import { connect } from 'react-redux';
import logo from '../static/logo4.png';


const handleLogout = (e) => {
    e.preventDefault();
    store.dispatch(logout());
    window.location.href = '/login'
}
const Navigator = (props) => {
    return (
        <Navbar variant="dark">
            <Navbar.Brand href="/" >
                <Image src={logo} style={{width:'50%', height:'50%', maxWidth:400}}></Image>
            </Navbar.Brand>
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