import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Project } from "./components/project/Project";
import { Athena } from "./components/api/Athena";
import { FinancialLiteracy } from "./components/financialLiteracy/FinancialLiteracy";


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
