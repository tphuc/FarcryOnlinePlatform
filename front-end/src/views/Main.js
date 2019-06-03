import React from 'react';
import {  Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import Profile from '../components/Profile';
import Keyboard from '../components/Keymap'
import Setting from '../components/Setting';

import Navigator from '../components/Navigator';
import SideBar from '../components/Sidebar';
import {Redirect} from 'react-router-dom'




const Index = (props) => {
    return(
        !props.isAuthenticated ?
        <Redirect to='/login'></Redirect> 
        :
        <div>
            <Col xs={4} md={4} xl={4} sm={4} lg={4} >
                <SideBar></SideBar>
            </Col>
            <Col xs={8} md={8} xl={8} sm={8} lg={8} style={{marginLeft: 240}}>
                <Navigator></Navigator>
                { props.selected === 'Profile' && <Profile></Profile> }
                { props.selected === 'Setting' && <Setting></Setting> }
                { props.selected === 'Keyboard' && <Keyboard></Keyboard> }
            </Col>
        </div>
    )
}
const mapStateToProps = (state) => (
    {
        selected : state.tabs.selected,
        isAuthenticated: state.auth.isAuthenticated,

    }
)

export default connect(mapStateToProps)(Index);