import React, { Component } from 'react';
import { Row, Container, Button } from 'react-bootstrap';
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import { Typography, OutlinedInput } from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';
import store from '../redux/store';
import MenuItem from "@material-ui/core/MenuItem";
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField'
import { connect } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import axios from 'axios'
import {loadUser} from '../redux/actions/auth'


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00838f'
        },
        type: "dark"
    }
});

const StyledSlider = withStyles({
    thumb: {
        backgroundColor: "#00bcd4"
    },
    track: {
        backgroundColor: "#00bcd4",
    },

})(Slider);

const style = {
    text: {
        fontFamily: "Arial",
        color: '#dddddd',
        marginTop: 10,
    },
    label: {
        fontWeight: 'bold',
    },
    slider: {
        padding: '10px 0px',
    }

}


const playerClass = {
    'hero' : "objects/characters/pmodels/hero/hero_mp.cgf",
    'merc_scout' : "objects/characters/mercenaries/merc_scout/merc_scout_mp.cgf",
    'merc_rear' : "objects/characters/mercenaries/merc_rear/merc_rear_mp.cgf",
    'evil_worker' : "bbjects/characters/workers/evil_worker/evil_worker_MP.cgf",
    'mertz' : "objects/characters/pmodels/story_characters/mertz/mertz_mp.cgf",
}

const colorSkin = ['#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000']

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

class Settings extends Component {
    constructor(props){
        super(props)
        this.state = {
            settings : props.user.settings
        }
    }

    submitData = () => {
        let settings = this.state.settings
        delete settings.user
        axios.put(`http://localhost:8000/api/user/${this.props.user.id}/settings`, settings, tokenConfig())
        .then(res => { alert('Successfully updated'); store.dispatch(loadUser())})
        .catch(err => alert("Invalid fields"))
    }

    render() {
        return (
            <Container style={{ marginTop: 80 }}>
                <ThemeProvider theme={theme}>
                    <Row>
                        <TextField
                            id="outlined-bare"
                            label='Game path'
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            id="outlined-bare"
                            label='Player name'
                            value={this.state.settings.ingame_name}
                            onChange={(e, value) => this.setState({settings: { ...this.state.settings, ingame_name:e.target.value }})}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        />
                        <Typography id="lazy-weapon" style={style.text}>Lazy weapon</Typography>
                        <StyledSlider
                            style={style.slider}
                            aria-labelledby="lazy-weapon"
                            min={0}
                            max={1}
                            value={this.state.settings.lazy_weapon}
                            onChange={(e, value) => this.setState({settings: { ...this.state.settings, lazy_weapon:value }})}
                        />

                        <Typography id="screen-brightness" style={style.text}>Screen brightness</Typography>
                        <StyledSlider
                            style={style.slider}
                            aria-labelledby="screen-brightness"
                            min={0}
                            max={1}
                            value={this.state.settings.brightness}
                            onChange={(e, value) => this.setState({settings: { ...this.state.settings, brightness:value }})}
                        />

                        <Typography id="graphic-quality" style={style.text}>Graphic Quality</Typography>
                        <StyledSlider
                            style={style.slider}
                            aria-labelledby="graphic-quality"
                            value={this.state.settings.screen_quality}
                            min={0}
                            max={3}
                            step={1}
                            onChange={(e, value) => this.setState({settings: { ...this.state.settings, screen_quality:value }})}
                        />

                        <Typography style={style.text}>Player class</Typography>
                        <Select
                            value={this.state.settings.model}
                            onChange={(e) => {
                                this.setState({settings: { ...this.state.settings, model:e.target.value }});
                                }}
                            input={
                                <OutlinedInput name="model" fullWidth id="outlined-age-native-simple" />
                            }
                            style={{ width: '100%' }}
                        >
                                {
                                    Object.keys(playerClass).map((key, index) =>
                                    <option value={playerClass[key]}> {key}</option> )
                                }
                        </Select>

                        <Typography id="skin-color" style={style.text}>Skin color</Typography>
                        <Select
                            value={this.state.settings.player_skin}
                            onChange={(val) => this.setState({settings: { ...this.state.settings, player_skin:val }})}
                            inputProps={{
                                name: "skin",
                                id: "demo-controlled-open-select"
                            }}
                            variant='filled'
                            style={{ width: '100%' }}
                        >
                            {
                                    colorSkin.map((val, ind) =>
                                        <MenuItem value={ind} style={{ backgroundColor: {val} }}></MenuItem>
                                    )
                            }
                        </Select>

                    </Row>

                    <Row style={{ marginTop: 50 }}>
                        <Button variant="outline-info" type="button" onClick={() => this.submitData()} >
                            Update
                    </Button>
                    </Row>


                </ThemeProvider>

            </Container>

        )
    }
}

const mapStateToProps = (state) => (
    {
        user: state.auth.user
    }
)

export default connect(mapStateToProps)(Settings);