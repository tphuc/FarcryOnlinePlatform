import React, {Component} from 'react';
import Navigator from '../components/Navigator';
import { Container, Row, Button } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {register, login} from '../redux/actions/auth';
import store from '../redux/store';



class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : "",
            email: "",
            password : "",
            confirm_password : "",
        }
    }

    handleRegister = (username, email, password, confirm_password) => {
        if (password === confirm_password){
            store.dispatch(register(username, email, password));
            store.dispatch(login(username, password))
        }

        this.setState({
            confirm_password: ''
        })
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
            <div>
            <Navigator></Navigator>
            <Container style={{width:"80%", maxWidth: 500 }} >
                <h1 className='text-center pt-5' style={{color: '#444444'}}> Login </h1>
                <Row>
                    <TextField
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
                        id="outlined-password-input"
                        label="Confirm Password"
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
                    <Button type='button' variant="info" onClick={(e) => { this.handleRegister(
                        this.state.username,
                        this.state.email,
                        this.state.password,
                        this.state.confirm_password
                    )}}
                        block> Sign up </Button>
                </Row>

                
            </Container>
        </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        isAuthenticated: state.auth.isAuthenticated
    }
)
export default connect(mapStateToProps)(Index);