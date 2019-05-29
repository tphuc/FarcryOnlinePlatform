import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlay } from "@fortawesome/free-solid-svg-icons";


const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    button:{
        margin: theme.spacing(1),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
        [theme.breakpoints.up('xs')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
        backgroundColor: '#006974',

    },
}));

function ButtonAppBar() {
    const classes = useStyles();
    return (

        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Farcry online
                </Typography>
                <Button color="inherit" >
                    <Typography noWrap>play <FontAwesomeIcon icon={faPlay}/></Typography>
                </Button>
            </Toolbar>
        </AppBar>

    );
}

export default ButtonAppBar;