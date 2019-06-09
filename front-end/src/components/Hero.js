import React from 'react'
import { Container, Row, Image, Col } from 'react-bootstrap';

const Index = () => {
    return(
        <Container >
            <Row>
                <Col xs={12} md={12} xl={12} sm={12} lg={12} style={{ display: 'flex', alignItems:'center', justifyContent:'center'}} >
                    <div style={{margin: 10, justifyContent:'center', alignItems:"center", display:'flex'}}>
                            <Image src="https://famfonts.com/wp-content/uploads/far-cry-wide.png" style={{ height:'auto', maxWidth:'100%'}} fluid />  
                    </div>
                </Col>
                <Col>
                    <hr></hr>
                    <h5>Status</h5>

                </Col>
            </Row>
        </Container>
    )
}
export default Index;