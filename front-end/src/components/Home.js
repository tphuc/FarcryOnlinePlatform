import React, { Component } from 'react';
import farcryLogo from '../static/farcry1.jpg'
import { Container, Row, Col, Image, Button, Card, Accordion, Table } from 'react-bootstrap';
import axios from 'axios';

const style = {
    text: {
        color: '#00bfa5'
    },
    btn_right: {
        position: 'absolute',
        right: 10,
        bottom: 10,
    },
    game_logo: {
        width: 200,
        transform: 'rotateY(35deg)'
    }
}


const refreshList = () => {

}

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matches: []
        }
        this.getMatches()
    }

    getMatches = () => {
        axios.get('/api/matches.list?')
            .then(res => res.data)
            .then(data => { this.setState({matches: data}); return data})
            .then(data => data.map((match, i) => this.getFragsFromMatch(match.id)))
    }
 
    getFragsFromMatch = (match_id) => {
        axios.get(`/api/frags.list?match_id=${match_id}`)
            .then(res => res.data)
            .then(data => {

                this.setState(state => {
                    const matches = state.matches.map(obj => { 
                        if (obj.id === match_id){
                            obj.frags = data
                            return obj
                        }   
                        else
                            return obj
                    })
                    return matches;
                })
            })
        
        }
    
    getFrags = () => {
        for (var i in this.state.matches){
            console.log(i)
        }
    }
        

    render() {
        return (
            <Container style={{ marginTop: 50, paddingBottom: 50 }}>
                <Row >
                    <Col xs={4} md={4} lg={4} xl={4}>
                        <div style={{ perspective: 1000, boxShadow: '0 4px 8px 0 #ffffff, 0 6px 20px 0 #00838f' }}>
                            <Image src={farcryLogo} style={style.game_logo} />
                        </div>
                    </Col>
                    <Col xs={8} md={8} lg={8} xl={8} style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>
                        <p style={style.text}>Far Cry is a first-person shooter (FPS) video game with amazing graphics, developed by Crytek and published by Ubisoft. The game was released in 2004 for Microsoft Windows.
                        The game was a huge commercial success. Ubisoft closed the online servers almost 12 years later.</p>
                        <Button variant='outline-info' style={style.btn_right}>Play</Button>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <h3 style={{ ...style.text, marginTop: 50, marginLeft: 20 }}>Recent matches</h3>
                </Row>
                <Row style={{ color: '#eeeeee' }}>
                    <Col>
                        <Accordion ActiveKey={0}>
                            {
                                this.state.matches.map((match, id) =>
                                {
                                return (
                                    <Card style={{ backgroundColor: 'transparent' }}>
                                    <Accordion.Toggle as={Button} variant="outline-light" eventKey={id}>
                                        Match {match.id}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey={id}>

                                        <Card.Body>
                                            <p> start time : {match.start_time} </p>
                                            <p> end time : {match.end_time} </p>
                                            <Table striped bordered hover variant="dark">
                                                <thead>
                                                    <tr>
                                                        <th>Time</th>
                                                        <th>killer</th>
                                                        <th>victim</th>
                                                        <th>weapon code</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        match.frags ? 
                                                        (match.frags.map((frag, i) =>
                                                            <tr>
                                                                <td>{frag.frag_time}</td>
                                                                <td>{frag.killer}</td>
                                                                <td>{frag.victim}</td>
                                                                <td>{frag.weapon_code}</td>
                                                            </tr>
                                                        )) : '' 
                                                    }
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>)
                                
                            })
                            }
                        </Accordion>
                    </Col>
                </Row>
            </Container>
                )
            }
        }
export default Index;