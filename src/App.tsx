import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Project } from "./components/Project";
import { Api } from "./components/api/Api";
import { Box, Container, Link, Typography } from "@material-ui/core";

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
		<Container maxWidth="lg">
			<Box my={ 4 }>
				<Router basename={ process.env.PUBLIC_URL }>
					<Switch>
						<Route path={ "/project/:name" } component={ Project }/>
						<Route path={ "/api" } component={ Api }/>
						<Route path={ "/" } component={ Home } Copyright={ () => Copyright() }/>
					</Switch>
				</Router>
			</Box>
		</Container>
	);
};
