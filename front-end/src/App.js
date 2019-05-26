import React from 'react';
import Home from './views/Home'
import Login from './views/Login'
import './App.css';
import { BrowserRouter as Router , Route} from "react-router-dom";


function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
