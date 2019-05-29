import React from 'react';
import { Container, Col, Row, Button, Nav, Tab } from 'react-bootstrap';
import ProfileSetting from '../components/ProfileSetting';
import Profile from '../components/Profile';
import Setting from '../components/Setting';
import Navigator from '../components/Navigator';
import Hero from '../components/Hero';
import SideBar from '../components/Sidebar';
import Header from '../components/Header';



const Index = () => {
    return(
        <div>
        {/* <Navigator></Navigator> */}

            <Col xs={4} md={4} xl={4} sm={4} lg={4} >
                <SideBar></SideBar>
            </Col>
            <Col xs={8} md={8} xl={8} sm={8} lg={8} >
                <Header/>
                {/* <Tab.Content>
                    <Profile></Profile>
                    <Setting></Setting>
                </Tab.Content> */}
            </Col>
        </div>
    )
}
export default Index;