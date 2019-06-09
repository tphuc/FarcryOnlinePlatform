import React, {Component} from 'react';
import { Container, Row, Button, Alert } from 'react-bootstrap';
import {TextField, createMuiTheme} from '@material-ui/core';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {register} from '../redux/actions/auth';
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
    constructor(props){
        super(props);
        this.state = {
            alerts : "Invalid form",
            username : "",
            email: "",
            password : "",
            confirm_password : "",
        }
    }


    handleRegister = (username, email, password, confirm_password) => {
        if (password === confirm_password){
            store.dispatch(register(username, email, password));
        }

    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return( 
            this.props.isAuthenticated ?
            <Redirect to='/'></Redirect> 
            :

            <Container style={{width:"80%", maxWidth: 500 }} >
                <ThemeProvider theme={theme}>
                <h1 className='text-center pt-5' style={{color: '#eeeeee'}}> Register </h1>
                <Row>
                <Alert variant="danger" show={false} dismissible style={{width: '100%', height: 50}} closeLabel='X' onClose={() => this.setState({showAlert: false})}>
                    <p>{this.state.alerts}</p>
                </Alert>

                </Row>
                <Row>
                    <TextField
                        label= "Username"
                        error =  { this.props.errors['username'] ? true : false }
                        helperText = { this.props.errors['username'] ? this.props.errors['username'] : "" }
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
                        error =  { this.props.errors['email'] ? true : false }
                        helperText = { this.props.errors['email'] ? this.props.errors['email'] : "" }
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        value={this.state.email}
                        onChange={this.onChange}
                        fullWidth
                    />
                    <TextField
                        error =  { this.props.errors['password'] ? true : false }
                        helperText = { this.props.errors['password'] ? this.props.errors['password'] : "" }
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
                    <TextField
                        error = {this.state.confirm_password !== this.state.password}
                        helperText = {this.state.confirm_password !== this.state.password ? 'Passwords do not match!':''}
                        id="outlined-password-input"
                        label="Confirm password"
                        type="password"
                        name='confirm_password'
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        value={this.state.confirm_password}
                        onChange={this.onChange}
                        fullWidth
                    />
                </Row>

                <Row >
                    <Button type='button' variant="outline-info" onClick={(e) => { this.handleRegister(
                        this.state.username,
                        this.state.email,
                        this.state.password,
                        this.state.confirm_password
                    )}}
                        block> Register </Button>

                </Row>
                <p className='text-center mb-1 text-secondary'>Already have an account?</p>
                    <Row >
                        <Button href='/login' type='button' variant="outline-success" block> Sign in </Button>
                    </Row>

                </ThemeProvider>   
            </Container>

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