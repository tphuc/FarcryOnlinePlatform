import React, { Component } from 'react';
import Main from './views/Main'
import Login from './views/Login'
import Signup from './views/Signup'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from './redux/store';
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
                    <Route exact path="/" component={Main} />
                    <Route path='/signup' component={Signup} />
                </Switch>
            </Router>
        );
    }

}
export default App;
