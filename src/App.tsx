import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from "./components/Home";
import {StarterHacks2020} from "./components/StarterHacks2020";
import {Shuffl} from "./components/Shuffl";
import {AstroJump} from "./components/AstroJump";
import {NsbeHacks} from "./components/NsbeHacks";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/starterhacks2020" component={StarterHacks2020}/>
                <Route path="/nsbehacks2020" component={NsbeHacks}/>
                <Route path="/shuffl" component={Shuffl}/>
                <Route path="/astrojump" component={AstroJump}/>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    );
}

export default App;
