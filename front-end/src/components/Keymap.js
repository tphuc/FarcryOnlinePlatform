import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import {TextField} from '@material-ui/core';

const keyActions = ['move_up', 'move_down', 'move_left', 'move_right']

const keyActionsMap = {
    'MOVE_LEFT': 'a',
    'MOVE_RIGHT': 'd',
    'MOVE_BACKWARD': 's',
    'MOVE_FORWARD' : 'w'
}
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00838f'
        },
        type: "dark"
    }
});


class Index extends Component{
    constructor(props){
        super(props);
        this.state = keyActionsMap
    }
    componentDidMount(){
        document.addEventListener('keypress', this.keyDetector, false)
    }

    componentWillUnmount(){
        document.removeEventListener('keypress', this.keyDetector, false)
    }

    keyDetector = (e) => {
        console.log(e.keyCode)
    }

    render(){
        return(
            <div style={{ marginTop: 100 }}>
                <ThemeProvider theme={theme}>
                <p> For particular reasons we only support few settings below: </p>
                    {
                        Object.keys(keyActionsMap).map( (key, index) => (
                        <TextField
                            id="outlined-name"
                            label={key}
                            margin="normal"
                            variant="outlined"
                            value={this.state[key]}
                            onKeyPress={(e) => {this.setState({[key]: e.key}); console.log(e.key)}}
                            fullWidth
                        />))
                    }
                </ThemeProvider>
            </div>
        )
    }
 
}
export default Index;