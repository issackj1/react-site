import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Project } from "./components/Project";
import { Athena } from "./components/api/Athena";
import { Link, Typography } from "@material-ui/core";
import { FinancialLiteracy } from "./components/financialLiteracy/FinancialLiteracy";

const Copyright = () => {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{ 'Copyright © ' }
			<Link color="inherit" href="https://react-site-five.vercel.app/">
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
				<Route path={ "/athena" } component={ Athena } copyright={ () => Copyright() }/>
				<Route path={ "/financialLiteracy" } component={ FinancialLiteracy } copyright={ () => Copyright() }/>
				<Route path={ "/" } component={ Home } copyright={ () => Copyright() }/>
			</Switch>
		</Router>
	);
};
