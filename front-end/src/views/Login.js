import React from 'react';
import Navigator from '../components/Navigator';
import { Container, Row, Button } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';


const Index = () => {
    return (
        <div>
            <Navigator></Navigator>
            <Container style={{width:"80%", maxWidth: 500 }} >
                <h1 className='text-center pt-5' style={{color: '#444444'}}> Login </h1>
                <Row>
                    <TextField
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                </Row>

                <Row >
                    <Button type='button' variant="info" block> Login </Button>
                </Row>
                <p className='text-center mb-1 text-secondary'>or</p>
                <Row >
                    <Button type='button' variant="success" block> Signup </Button>
                </Row>
                
            </Container>
        </div>
    )

}
export default Index;