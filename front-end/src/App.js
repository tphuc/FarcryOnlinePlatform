import React, { Component } from 'react';
import Home from './views/Home'
import Main from './views/Main'
import Login from './views/Login'
import Signup from './views/Signup'
import Sidebar from './components/Sidebar'
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import store from './redux/store';
import {connect} from 'react-redux'
import { loadUser } from './redux/actions/auth'




class App extends Component {
    componentDidMount = () => {
        store.dispatch(loadUser())
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route exact path="/" component={Home} />
                    <Route path='/signup' component={Signup} />
                </Switch>
            </Router>
        );
    }

}
const mapStateToProps = (state) => (
    {
        isAuthenticated: state.auth.isAuthenticated,
    }
)
export default App;
