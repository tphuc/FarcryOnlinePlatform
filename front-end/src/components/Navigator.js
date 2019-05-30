import React from 'react';
import { Navbar, Nav, Form,  Button, Image, Row } from 'react-bootstrap';
import store from '../redux/store';
import {logout} from '../redux/actions/auth'
import { connect } from 'react-redux';
import logo from '../static/logo4.png';
import {Typography} from '@material-ui/core';


const handleLogout = (e) => {
    e.preventDefault();
    store.dispatch(logout());
    window.location.href = '/login'
}
const Navigator = (props) => {
    return (
        <Row>

        
        <Navbar variant='dark' fixed='top' style={{backgroundColor: '#111111'}} >
            <Typography variant="h6" style={{marginLeft: 240, color:'#00bcd4'}} >Farcry Online</Typography>
            {
                !props.isAuthenticated ?
                (<Button href='/login' className='ml-auto' variant="outline-info">Play</Button>):
                (<Button  className='ml-auto' variant="outline-info" onClick={handleLogout} >Logout</Button>)
            }
        </Navbar>
        </Row>
    )
}

const mapStateToProps = (state) => (
    {
        isAuthenticated : state.auth.isAuthenticated
    }
)

export default connect(mapStateToProps)(Navigator);