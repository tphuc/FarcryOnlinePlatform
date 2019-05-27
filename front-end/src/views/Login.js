import React, {Component} from 'react';
import Navigator from '../components/Navigator';
import { Container, Row, Button } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {login} from '../redux/actions/auth';
import store from '../redux/store';


class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : ""
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
                        store.dispatch(login(this.state.username, this.state.password))}} 
                        block> Login </Button>
                </Row>
                <p className='text-center mb-1 text-secondary'>or</p>
                <Row >
                    <Button href='/signup' type='button' variant="success" block> Signup </Button>
                </Row>
                
            </Container>
        </div>
        )
    }
}
// const Index = (props) => {
//     return (
//         <div>
//             <Navigator></Navigator>
//             <Container style={{width:"80%", maxWidth: 500 }} >
//                 <h1 className='text-center pt-5' style={{color: '#444444'}}> Login </h1>
//                 <Row>
//                     <TextField
//                         label="Username"
//                         type="username"
//                         name="username"
//                         autoComplete="email"
//                         margin="normal"
//                         variant="outlined"
//                         fullWidth
//                     />
//                     <TextField
//                         id="outlined-password-input"
//                         label="Password"
//                         type="password"
//                         autoComplete="current-password"
//                         margin="normal"
//                         variant="outlined"
//                         fullWidth
//                     />
//                 </Row>

//                 <Row >
//                     <Button type='button' variant="info" onClick={(e) => {
//                         store.dispatch(login())
//                     }
//                     } block> Login </Button>
//                 </Row>
//                 <p className='text-center mb-1 text-secondary'>or</p>
//                 <Row >
//                     <Button type='button' variant="success" block> Signup </Button>
//                 </Row>
                
//             </Container>
//         </div>
//     )

// }

const mapStateToProps = (state) => (
    {
        isAuthenticated: state.auth.isAuthenticated
    }
)
export default connect(mapStateToProps)(Index);