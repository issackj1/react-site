import React from "react";
import "./App.css";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import {Home} from "./components/Home";
import {Project} from "./components/Project";
import {HackathonOne, HackathonTwo, NoProject, ProjectOne, ProjectTwo} from "./constants";

function getProject(name: string) {
    let result;
    switch (name) {
        case  "starterhacks2020":
            result = HackathonOne;
            break;
        case "nsbehacks2020":
            result = HackathonTwo;
            break;
        case "shuffl":
            result = ProjectOne;
            break;
        case "astrojump":
            result = ProjectTwo;
            break;
        default:
            result = NoProject;
    }
    return result;
}

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/project/:name" render={(routeProps) => (
                    <Project {...routeProps} {...getProject(((routeProps.match.params.name)))} />
                )}/>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    );
}

export default App;
