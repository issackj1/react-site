import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Project } from "./components/Project";
import { Api } from "./components/api/Api";
import { Link, Typography } from "@material-ui/core";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{ 'Copyright © ' }
			<Link color="inherit" href="http://3.94.8.68/">
				Issack John
			</Link>{ ' ' }
			{ new Date().getFullYear() }
			{ '.' }
		</Typography>
	);
}

export default function App() {
	return (
		<Router basename={ process.env.PUBLIC_URL }>
			<Switch>
				<Route path={ "/project/:name" } component={ Project }/>
				<Route path={ "/api" } component={ Api }/>
				<Route path={ "/" } component={ Home } Copyright={ () => Copyright() }/>
			</Switch>
		</Router>
	);
};
