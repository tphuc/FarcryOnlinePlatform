import React from 'react'
import { Container, Row, Image, Col } from 'react-bootstrap';

const Index = () => {
    return(
        <Container >
            <Row>
                <Col xs={12} md={12} xl={12} sm={12} lg={12} style={{ display: 'flex', alignItems:'center', justifyContent:'center'}} >
                    <div style={{margin:5, justifyContent:'center', alignItems:"center", display:'flex'}}>
                            <Image src="https://pngimage.net/wp-content/uploads/2018/06/teal-circle-png.png" style={{ border:'2px solid #bbbbbb', height:'auto', maxWidth:'80%'}} fluid roundedCircle />  
                    </div>
                    
                </Col>
                <Col>
                    <p>
                    Challenger
                    </p>
                    <hr></hr>
                    <h5>Status</h5>

                </Col>
            </Row>
        </Container>
    )
}
export default Index;