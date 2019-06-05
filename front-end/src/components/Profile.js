import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import { TextField, Typography } from '@material-ui/core';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';
import { connect } from 'react-redux';
import login from  '../redux/actions/auth';
import store from '../redux/store';
import axios from 'axios';



const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00838f'
        },
        type: "dark"
    }
});

const style = {
    label: {
        color: "#eeeeee"
    },
    input: {
        color: '#dddddd'
    }
}


const tokenConfig = () => {
    const token = store.getState().auth.token;
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    if (token) {
        config.headers["Authorization"] = `Token ${token}`;
    }
    return config;
};



class ProfileForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            password : '',
            new_password : '',
        }
    }
    submitData = (username, password, new_password) => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
    
        axios.post("http://localhost:8000/api/auth/login", JSON.stringify({username, password}), config)
        .then(res => 
            axios.put(`/api/user/${store.getState().auth.user.id}/profile`, {password: new_password}, tokenConfig())
            .then(res => alert('Successfully updated'))
            .then(() => this.setState({password:'', new_password:''}))
        )
        .catch(err => alert("Why don't you remember your old password? >_>"))
    }
    render() {
        return (
            <Container style={{ marginTop: 100 }}>
                <ThemeProvider theme={theme}>
                    <Typography style={style.label} >Email address</Typography>
                    <TextField
                        id="outlined-name"
                        label="email"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        value={this.props.user.email}
                    />

                    <Typography style={style.label}>Account</Typography>
                    <TextField
                        id="outlined-name"
                        label="username"
                        margin="normal"
                        variant="outlined"
                        value={this.props.user.username}
                        fullWidth
                    />
                    <TextField
                        id="outlined-name-2"
                        label="password"
                        margin="normal"
                        variant="outlined"
                        type='password'
                        fullWidth
                        value={this.state.password}
                        onChange={(e) => this.setState({password: e.target.value})}

                    />
                    <TextField
                        id="outlined-name-2"
                        label="new password"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        type='password'
                        value={this.state.new_password}
                        onChange={(e) => this.setState({new_password: e.target.value})}
                    />

                    <Button variant="outline-info" type="submit" onClick={(e) => this.submitData(this.props.user.username, this.state.password, this.state.new_password)}>
                        Update
                    </Button>
                </ThemeProvider>
            </Container>
        )
    }
}


const mapStateToProps = (state) => ({
    user : state.auth.user
})

export default connect(mapStateToProps)(ProfileForm);