import React, { useEffect, useState } from 'react';
import '../../App.css';
import { Route, Switch } from "react-router-dom";
import { Welcome } from "./Welcome";
import { CircularProgress, Fade } from "@material-ui/core";
import { Auth } from "./Auth";
import { PrivateRoute } from "./PrivateRoute";
import { Endpoint } from "./Endpoint";

const axios = require('axios');

interface Props {

}

export const Api: React.FC<Props> = () => {

	const [authenticated, setAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const authenticate = async () => {
		setIsLoading(true)
		setIsError(false)
		await axios.post('http://localhost:4000/api/confirm-token', {},
			{
				headers: {
					Authorization: localStorage.getItem('my-jwt')
				}
			})
			.then((result: any) => setAuthenticated(true),
				(error: any) => {
				});
		setIsLoading(false);
		return null;
	}

	useEffect(() => {
		setIsLoading(true)
		if (!authenticated) {
			authenticate().then(r => (result: any) => {
				},
				(error: any) => setIsError(true))
		}
		setIsLoading(false)
	}, [authenticated])

	return (
		<div className={"container d-flex flex-column justify-content-center h-100"}>
			{
				isLoading
					? (<div>
							<Fade in={ isLoading } style={ { transitionDelay: isLoading ? '800ms' : '0ms', } }
							      unmountOnExit>
								<CircularProgress/>
							</Fade>
						</div>
					)
					: (
						<Switch>
							<Route path={ "/api/auth" } component={ Auth } authenticated={ authenticated }/>
							<PrivateRoute path={ "/api/:name" } component={ Endpoint }/>
							<PrivateRoute path={ "/" } component={ Welcome }/>
						</Switch>
					)
			}
		</div>
	);
};
