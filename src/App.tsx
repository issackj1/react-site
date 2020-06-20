import React from "react";
import "./App.css";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import {Home} from "./components/Home";
import {Shuffl} from "./components/Shuffl";
import {AstroJump} from "./components/AstroJump";
import {HackathonPage} from "./components/HackathonPage";
import {HackathonOne, HackathonTwo, NoHackathon} from "./constants";

function getHackathon(name: string) {
    let result;
    switch (name) {
        case  "StarterHacks2020":
            result = HackathonOne;
            break;
        case "NSBEHacks2020":
            result = HackathonTwo;
            break;
        default:
            result = NoHackathon;
    }
    return result;
}

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/shuffl" component={Shuffl}/>
                <Route path="/astrojump" component={AstroJump}/>
                <Route path="/hackathon/:name" render={(routeProps) => (
                    <HackathonPage {...routeProps} {...getHackathon(((routeProps.match.params.name)))} />
                )}/>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    );
}

export default App;
