import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import ProfileSetting from '../components/ProfileSetting';
import Navigator from '../components/Navigator';
import Hero from '../components/Hero'



const Index = () => {
    return(
        <div>
        <Navigator></Navigator>
        <Container>
            <Row>
            <Col xs={12} md={5} xl={4} sm={12} lg={4} >
                    <Hero></Hero>
            </Col>
            <Col xs={12} md={7} xl={8} sm={12} lg={8} >
                    <ProfileSetting/> 
            </Col>
            </Row>
            
        </Container>
        </div>
    )
}
export default Index;