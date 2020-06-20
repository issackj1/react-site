import React from "react";
import "./App.css";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "./components/Home";
import {Project} from "./components/Project";
import {HackathonOne, HackathonTwo, navProps, NoProject, ProjectOne, ProjectTwo} from "./constants";

function getProps(name: string) {

    let project;
    switch (name) {
        case  "starterhacks2020":
            project = HackathonOne;
            break;
        case "nsbehacks2020":
            project = HackathonTwo;
            break;
        case "shuffl":
            project = ProjectOne;
            break;
        case "astrojump":
            project = ProjectTwo;
            break;
        default:
            project = NoProject;
    }
    return {
        navProps: navProps,
        projectDetail: project
    };
}

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/project/:name" render={(routeProps) => (
                    <Project {...routeProps} {...getProps(((routeProps.match.params.name)))} />
                )}/>
                <Route path="/" render={(routeProps) => (
                    <Home {...routeProps} {...navProps} />
                )}/>
            </Switch>
        </Router>
    );
}

export default App;
