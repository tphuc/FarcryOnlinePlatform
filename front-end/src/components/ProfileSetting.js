import React from 'react';
import { connect } from 'react-redux';
import { setSliderValue } from '../redux/actions/profileSetting';
import store from '../redux/store';
import '../styles/Navigator.css';
import { Tabs, Tab, Container, Form, Button, Row } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from '@material-ui/core/TextField'


var myInput = 0;
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

const StyledSlider = withStyles({
    thumb:{
        backgroundColor: "#222222"
    },
    track: {
        backgroundColor: "#222222",
    },

  })(Slider);

const ProfileForm = () => {
    return (
        <Form style={{ ...style.text }} action='/path'>
            <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ ...style.label, marginTop: 20 }} >Email address</Form.Label>
                <Form.Control type="email" placeholder="example@gmail.com" disabled />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group >
                <Form.Label style={style.label}>Account</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                    disabled
                />
                <Form.Control.Feedback type="invalid">
                    Please choose a username.
                </Form.Control.Feedback>
                <Form.Control type="password" placeholder="Old password" name='old_password' />
                <Form.Control type="password" placeholder="New password" name='new_password' />
                <Form.Control type="password" placeholder="Confirm new password" name='confirm_password' />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(e) => { e.preventDefault(); console.log(e) }}>
                Update
            </Button>


        </Form>
    );
}

const Settings = (props) => {

    return (
        <Container style={{ marginTop: 50 }}>
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

                <Typography id="skin-color" style={{marginTop: 20}}>Skin color</Typography>
                <Select
                    value={1}
                    onChange={(val) => {console.log(val)}}
                    inputProps={{
                        name: "age",
                        id: "demo-controlled-open-select"
                    }}
                    style={{ width: '100%', backgroundColor: '#222222'}}
                >
                    <MenuItem value={0} style={{ backgroundColor: "#222222" }}></MenuItem>
                    <MenuItem value={1} style={{ backgroundColor: "#aaaaaa" }}></MenuItem>
                    <MenuItem value={2} style={{ backgroundColor: "#cccccc" }}></MenuItem>
                    <MenuItem value={3} style={{ backgroundColor: "#ffffff" }}></MenuItem>
                </Select>

            </Row>

            <Row style={{marginTop: 50}}>
                <Button variant="primary" type="button" onClick={() => console.log(myInput)}>
                    Update
                </Button>
            </Row>

        </Container>
    )
}

const Index = (props) => {
    return (
        <Container style={{ marginTop: 10 }}>
            <Tabs defaultActiveKey="profile" onSelect={(key, e) => console.log(key, e.target)} >
                <Tab eventKey="profile" title="Profile" tabClassName="btn btn-dark">
                    <ProfileForm></ProfileForm>
                </Tab>
                <Tab eventKey="settings" title="Settings" tabClassName="btn btn-dark">
                    <Settings lazyWeapon={props.lazyWeapon} screenBrightness={props.screenBrightness} graphicQuality={props.graphicQuality} />
                </Tab>
            </Tabs>
        </Container>
    )
}

const mapStateToProps = (state) => (
    {
        lazyWeapon: state.lazyWeapon,
        screenBrightness: state.screenBrightness,
        graphicQuality: state.graphicQuality,
    }
)

export default connect(mapStateToProps)(Index);
