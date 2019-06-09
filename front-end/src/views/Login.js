import React, { Component } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import {TextField, createMuiTheme}from '@material-ui/core';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../redux/actions/auth';
import store from '../redux/store';
import { ThemeProvider } from '@material-ui/styles';


const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#00838f'
      },
      type: "dark"
    }
  });

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            this.props.isAuthenticated ?
                <Redirect to='/'></Redirect>
                :
                <div>
                    <Container style={{ width: "80%", maxWidth: 500 }} >
                        <h1 className='text-center pt-5' style={{ color: '#eeeeee' }}> Login </h1>
                        <ThemeProvider theme={theme}>
                        <Row>
                            <TextField
                                error={this.props.errors['username'] || this.props.errors['authenticate_error'] ? true : false}
                                helperText={this.props.errors['username'] ? this.props.errors['username'] : ""}
                                label="Username"
                                type="username"
                                name="username"
                                autoComplete="email"
                                margin="normal"
                                variant="outlined"
                                value={this.state.username}
                                onChange={this.onChange}
                                fullWidth
                            />
                            <TextField
                                error={this.props.errors['password'] || this.props.errors['authenticate_error'] ? true : false}
                                helperText={this.props.errors['password'] ? this.props.errors['password'] : ""}
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                name='password'
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                value={this.state.password}
                                onChange={this.onChange}
                                fullWidth
                            />
                        </Row>

                        <Row >
                            <Button type='button' variant="info" onClick={(e) => {
                                store.dispatch(login(this.state.username, this.state.password));}}
                                block> Sign in </Button>
                        </Row>
                        <p className='text-center mb-1 text-secondary'>or</p>
                        <Row >
                            <Button href='/signup' type='button' variant="success" block> Register </Button>
                        </Row>
                        </ThemeProvider>            
                    </Container>
                </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        isAuthenticated: state.auth.isAuthenticated,
        errors: state.error.msg
    }
)
export default connect(mapStateToProps)(Index);