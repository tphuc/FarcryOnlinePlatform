import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import {TextField} from '@material-ui/core';
import {Button} from 'react-bootstrap';



const keyActionsMap = {
    'MOVE_LEFT': 'a',
    'MOVE_RIGHT': 'd',
    'MOVE_BACKWARD': 's',
    'MOVE_FORWARD' : 'w',
    'RELOAD': 'r',
    'MOVEMODE2': 'v',
    'FIREMODE': 'x'
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
            <div style={{ marginTop: 100 , paddingBottom: 100}}>
                <ThemeProvider theme={theme}>
                <p className='text-info'> For particular reasons we only support few settings below: </p>
                    {
                        Object.keys(keyActionsMap).map( (key, index) => (
                        <TextField
                            id="outlined-name"
                            label={key}
                            margin="normal"
                            variant="outlined"
                            value={this.state[key]}
                            onKeyPress={(e) => {
                                for (var ind in this.state){
                                    if (this.state[ind] === e.key && ind !== key) {
                                        this.setState({[ind]: ''})
                                    }
                                };
                                this.setState({[key]: e.key});
                            }}
                            fullWidth
                        />))
                    }
                </ThemeProvider>
                
                    <Button style={{marginTop: 50}} variant="outline-info" type="button" >
                        Update
                    </Button>

            </div>
        )
    }
 
}
export default Index;