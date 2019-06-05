import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import {TextField} from '@material-ui/core';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import store from '../redux/store';
import axios from 'axios';
import {loadUser} from '../redux/actions/auth'



const keyActionsMap = {
    'MOVE_LEFT': 'a',
    'MOVE_RIGHT': 'd',
    'MOVE_BACKWARD': 's',
    'MOVE_FORWARD' : 'w',
    'RELOAD': 'r',
    'MOVEMODE2': 'v',
    'FIREMODE': 'x'
}

const keyActions = [
    'k_move_left',
    'k_move_right',
    'k_move_backward',
    'k_move_forward',
    'k_reload',
    'k_movemode2',
    'k_firemode',
]
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00838f'
        },
        type: "dark"
    }
});
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

class Index extends Component{
    constructor(props){
        super(props)
        this.state = this.props.user.settings

    }
    componentDidMount(){
        document.addEventListener('keypress', this.keyDetector, false)
    }

    componentWillUnmount(){
        document.removeEventListener('keypress', this.keyDetector, false)
    }

    submitData = () => {
        let settings = this.state
        delete settings.user
        axios.put(`http://localhost:8000/api/user/${this.props.user.id}/settings`, settings, tokenConfig())
        .then(res => { alert('Successfully updated'); store.dispatch(loadUser())})
        .catch(err => alert("Invalid fields"))
    }

    render(){
        return(
            <div style={{ marginTop: 100 , paddingBottom: 100}}>
                <ThemeProvider theme={theme}>
                <p className='text-info'> For particular reasons we only support few settings below: </p>
                    {
                        keyActions.map((key, index) => (
                        <TextField
                            id={key}
                            label={key}
                            margin="normal"
                            variant="outlined"
                            value={this.state[key]}
                            onKeyPress={(e) => {
                                for (var k in this.state){
                                    if (this.state[k] === e.key && k !== key) {
                                        this.setState({[k] : ''});
                                    }
                                };
                                this.setState({[key] : e.key});
                            }}
                            fullWidth
                        />))
                    }
                </ThemeProvider>
                
                    <Button style={{marginTop: 50}} variant="outline-info" type="button" onClick={() => this.submitData()} >
                        Update
                    </Button>

            </div>
        )
    }
 
}
const mapStateToProps = (state) => ({
    user : state.auth.user
})
export default connect(mapStateToProps)(Index);