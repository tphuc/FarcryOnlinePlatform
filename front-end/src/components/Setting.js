import React from 'react';
import { Row, Container, Form, Button, Tab } from 'react-bootstrap';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import store from '../redux/store';
import MenuItem from "@material-ui/core/MenuItem";
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField'
import { setSliderValue } from '../redux/actions/setting';


const StyledSlider = withStyles({
    thumb: {
        backgroundColor: "#222222"
    },
    track: {
        backgroundColor: "#222222",
    },

})(Slider);

const style = {
    text: {
        fontFamily: "Arial",
    },
    label: {
        fontWeight: 'bold',
    },
    slider: {
        padding: '22px 0px',
    }

}

const Settings = (props) => {

    return (
        <Tab.Pane eventKey='setting'>
            <Container>
                <Row>
                    <TextField
                        id="outlined-bare"
                        placeholder='game folder'
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                    <Typography id="lazy-weapon">Lazy weapon</Typography>
                    <StyledSlider
                        style={style.slider}
                        aria-labelledby="lazy-weapon"
                        min={0}
                        max={1}
                        value={props.lazyWeapon}
                        onChange={(e, value) => store.dispatch(setSliderValue(value, 'lazyWeapon'))}
                    />

                    <Typography id="screen-brightness">Screen brightness</Typography>
                    <StyledSlider
                        style={style.slider}
                        aria-labelledby="screen-brightness"
                        min={0}
                        max={1}
                        value={props.screenBrightness}
                        onChange={(e, value) => store.dispatch(setSliderValue(value, 'screenBrightness'))}
                    />

                    <Typography id="graphic-quality">Graphic Quality</Typography>
                    <StyledSlider
                        style={style.slider}
                        aria-labelledby="graphic-quality"
                        value={props.graphicQuality}
                        min={0}
                        max={3}
                        step={1}
                        onChange={(e, value) => store.dispatch(setSliderValue(value, 'graphicQuality'))}
                    />

                    <Typography>Player class</Typography>
                    <Form.Control as="select" >
                        <option value='Jack'>Jack</option>
                        <option value='Scout'>Scout</option>
                        <option value='Evil'>Evil worker</option>
                        <option value='Mert'>Mert</option>
                    </Form.Control>

                    <Typography id="skin-color" style={{ marginTop: 20 }}>Skin color</Typography>
                    <Select
                        value={1}
                        onChange={(val) => { console.log(val) }}
                        inputProps={{
                            name: "age",
                            id: "demo-controlled-open-select"
                        }}
                        style={{ width: '100%', backgroundColor: '#222222' }}
                    >
                        <MenuItem value={0} style={{ backgroundColor: "#222222" }}></MenuItem>
                        <MenuItem value={1} style={{ backgroundColor: "#aaaaaa" }}></MenuItem>
                        <MenuItem value={2} style={{ backgroundColor: "#cccccc" }}></MenuItem>
                        <MenuItem value={3} style={{ backgroundColor: "#ffffff" }}></MenuItem>
                    </Select>

                </Row>

                <Row style={{ marginTop: 50 }}>
                    <Button variant="primary" type="button" >
                        Update
                </Button>
                </Row>

            </Container>
        </Tab.Pane>
    )
}
export default Settings;