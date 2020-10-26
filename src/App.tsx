import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Project } from "./components/Project";
import { Athena } from "./components/api/Athena";
import { Link, Typography } from "@material-ui/core";
import { FinancialLiteracy } from "./components/financialLiteracy/FinancialLiteracy";

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
				<Route path={ "/athena" } component={ Athena }/>
				<Route path={ "/financialLiteracy" } component={ FinancialLiteracy }/>
				<Route path={ "/" } component={ Home } Copyright={ () => Copyright() }/>
			</Switch>
		</Router>
	);
};
