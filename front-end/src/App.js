import React, {Component} from 'react';
import Home from './views/Home'
import Login from './views/Login'
import Signup from './views/Signup'
import Sidebar from  './components/Sidebar'
import './App.css';
import { BrowserRouter as Router , Route, Redirect} from "react-router-dom";
import store from './redux/store';
import { loadUser } from './redux/actions/auth'




class App extends Component {
    componentDidMount = () => {
        store.dispatch(loadUser())
    }
    render(){
        return (
            <Router>
{/* 
                <Route path="/login" component={Login} />
                <Route exact path="/" component={Home} />
                <Route path='/signup' component={Signup}/> */}
                <Route path='/' component={Home}></Route>
                
            </Router>
          );
    }
  
}

export default App;
