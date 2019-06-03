import React from 'react';
import { Row, Container, Button } from 'react-bootstrap';
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import {Typography, OutlinedInput} from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';
import store from '../redux/store';
import MenuItem from "@material-ui/core/MenuItem";
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField'
import { setSliderValue } from '../redux/actions/setting';
import { connect } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';


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

const Settings = (props) => {

    return (

        <Container style={{ marginTop: 80 }}>
            <ThemeProvider theme={theme}>
                <Row>

                    <TextField
                        id="outlined-bare"
                        placeholder='game folder'
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
                        value={props.lazyWeapon}
                        onChange={(e, value) => store.dispatch(setSliderValue(value, 'lazyWeapon'))}
                    />

                    <Typography id="screen-brightness" style={style.text}>Screen brightness</Typography>
                    <StyledSlider
                        style={style.slider}
                        aria-labelledby="screen-brightness"
                        min={0}
                        max={1}
                        value={props.screenBrightness}
                        onChange={(e, value) => store.dispatch(setSliderValue(value, 'screenBrightness'))}
                    />

                    <Typography id="graphic-quality" style={style.text}>Graphic Quality</Typography>
                    <StyledSlider
                        style={style.slider}
                        aria-labelledby="graphic-quality"
                        value={props.graphicQuality}
                        min={0}
                        max={3}
                        step={1}
                        onChange={(e, value) => store.dispatch(setSliderValue(value, 'graphicQuality'))}
                    />

                    <Typography style={style.text}>Player class</Typography>
                    <Select
                        value={10}
                        onChange={(val) => { console.log(val) }}
                        input={
                            <OutlinedInput name="age" fullWidth id="outlined-age-native-simple" />
                        }
                        style={{ width: '100%' }}
                    >
                        <option value={0}>Jack</option>
                        <option value={10}>Evil Worker</option>
                        <option value={20}>Mert</option>
                        <option value={30}>Commander</option>
                    </Select>

                    <Typography id="skin-color"  style={style.text}>Skin color</Typography>
                    <Select
                        value={1}
                        onChange={(val) => { console.log(val) }}
                        inputProps={{
                            name: "age",
                            id: "demo-controlled-open-select"
                        }}
                        variant='filled'
                        style={{ width: '100%' }}
                    >
                        <MenuItem value={0} style={{ backgroundColor: "#222222" }}></MenuItem>
                        <MenuItem value={1} style={{ backgroundColor: "#aaaaaa" }}></MenuItem>
                        <MenuItem value={2} style={{ backgroundColor: "#cccccc" }}></MenuItem>
                        <MenuItem value={3} style={{ backgroundColor: "#ffffff" }}></MenuItem>
                    </Select>

                </Row>

                <Row style={{ marginTop: 50 }}>
                    <Button variant="outline-info" type="button" >
                        Update
                    </Button>
                </Row>


            </ThemeProvider>

        </Container>

    )
}

const mapStateToProps = (state) => (
    {
        lazyWeapon: state.setting.lazyWeapon,
        screenBrightness: state.setting.screenBrightness,
        graphicQuality: state.setting.graphicQuality,
    }
)

export default connect(mapStateToProps)(Settings);