import React from 'react';
import { Navbar,  Button,  Row } from 'react-bootstrap';
import store from '../redux/store';
import {logout} from '../redux/actions/auth'
import { connect } from 'react-redux';
import {Typography} from '@material-ui/core';
import {faGamepad} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
                props.isAuthenticated &&
                <Button  className='ml-auto' variant="outline-info" onClick={handleLogout} style={{borderWidth: 0, borderRadius: '45%'}}>
                    <FontAwesomeIcon icon={faGamepad}/>
                </Button>
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