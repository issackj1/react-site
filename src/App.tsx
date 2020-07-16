import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Project } from "./components/Project";
import { navProps } from "./constants";
import { Api } from "./components/api/Api";

function App() {
	return (
		<Router basename={ process.env.PUBLIC_URL }>
			<Switch>
				<Route path={ "/project/:name" } component={ Project }/>
				<Route path={ "/api" } component={ Api }/>
				<Route path={ "/" } component={ Home } { ...navProps } />
			</Switch>
		</Router>
	);
}

export default App;
