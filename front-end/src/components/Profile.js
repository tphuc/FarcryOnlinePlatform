import React from 'react';
import {  Button,  Container } from 'react-bootstrap';
import { TextField, Typography } from '@material-ui/core';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';



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


const ProfileForm = () => {
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
            />

            <Typography style={style.label}>Account</Typography>
            <TextField
                id="outlined-name"
                label="username"
                margin="normal"
                variant="outlined"
                fullWidth
            />
            <TextField
                id="outlined-name-2"
                label="password"
                margin="normal"
                variant="outlined"
                fullWidth

            />
            <TextField
                id="outlined-name-2"
                label="new password"
                margin="normal"
                variant="outlined"
                fullWidth
            />

            <Button variant="outline-info" type="submit" >
                Update
            </Button>
            </ThemeProvider>
        </Container>
    );
}

export default ProfileForm;