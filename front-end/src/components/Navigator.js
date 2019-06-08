
import React from 'react';
import { Navbar,  Button,  Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import {Typography} from '@material-ui/core';
import {faGamepad} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const handleLogout = (e) => {
    e.preventDefault();
    var execFile = window.require('child_process').execFile;
    const path = window.require('path').resolve();
    const python_file = 'my_script.py';
    const python_path = path + '/watch_dog/' + python_file;
    execFile('python3', [python_path, localStorage.getItem('token'), path])
}
const Navigator = (props) => {
    return (
        <Row>
        <Navbar variant='dark' fixed='top' style={{backgroundColor: '#111111'}} >
            <Typography variant="h6" style={{marginLeft: 240, color:'#00bcd4'}} >Farcry Online</Typography>
            {
                props.isAuthenticated &&
                <Button  className='ml-auto' id='play-game-button' variant="outline-info" onClick={handleLogout} style={{borderWidth: 0, borderRadius: '45%'}}>
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