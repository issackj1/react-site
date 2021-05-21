import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./views/Home";
import { Project } from "./components/project/Project";
import { Athena } from "./views/Athena";
import { FinancialLiteracy } from "./views/FinancialLiteracy";


export default function App() {
	return (
		<Router basename={ process.env.PUBLIC_URL }>
			<Switch>
				<Route path={ "/project/:name" } component={ Project }/>
				<Route path={ "/athena" } component={ Athena }/>
				<Route path={ "/financialLiteracy" } component={ FinancialLiteracy }/>
				<Route path={ "/" } component={ Home }/>
			</Switch>
		</Router>
	);
};
