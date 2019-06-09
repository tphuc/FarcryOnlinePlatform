import React, { Component } from 'react';
import {Image, Nav} from 'react-bootstrap'
import logo from '../static/logo4.png'
import { withStyles } from '@material-ui/core/styles';
import {Drawer} from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { faHome, faUser, faCog, faKeyboard, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import store from '../redux/store';
import {selectTab} from '../redux/actions/tabs';
import {Button} from 'react-bootstrap';
import {logout} from '../redux/actions/auth'



const drawerWidth = 240;
const tabs = ['Home', 'Profile', 'Setting', 'Keyboard']
const tabIcons = [faHome, faUser, faCog, faKeyboard ]

const useStyles = {
    root: {
        display: 'flex',
    },
    title:{
        height: 100,
        backgroundColor: '#1a1a1a'
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    item:{
        color: "#bbbbbb"
    },
    drawer: {
        width: drawerWidth,
    },
    selected: {
        color: "#00bcd4"
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#1a1a1a'
    }
}
const handleLogout = (e) => {
    e.preventDefault();
    store.dispatch(logout());
    window.location.href = '/login'
}

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'Home'
        }
        store.dispatch(selectTab('Home'))
    }
    render() {
        const { classes } = this.props;
        return (
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.title}>
                    <Nav.Link href='/'>
                        <Image src={logo} fluid/>
                    </Nav.Link>
                </div> 
                <Divider />
                    <List>
                        {tabs.map((text, index) => (
                            <ListItem button key={text}
                                classes={{
                                    selected: classes.selected,
                                    root: classes.item
                                }}
                                selected={text === this.state.selected}
                                onClick={() => {
                                    this.setState({ selected: text });
                                    store.dispatch(selectTab(text))
                            }}
                            >   
                                <ListItemText><FontAwesomeIcon icon={tabIcons[index]}/>    {text}</ListItemText> 
                            </ListItem>
                        ))}
                    </List>
                <Divider />
                <div style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
                    <Button style={{position: "absolute", bottom: 0, border: 0, width:'100%'}} variant='outline-info'onClick={handleLogout} > <FontAwesomeIcon icon={faSignOutAlt}/>Logout</Button>
                </div>
            </Drawer>
        );
    }
}

export default withStyles(useStyles)(Index);