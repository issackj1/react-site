import React, { useEffect, useState } from 'react';
import '../../App.css';
import { Route, Switch, useHistory } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Box, Button, CircularProgress, Container, Fade, SvgIcon } from "@material-ui/core";
import { Auth } from "./Auth";
import { PrivateRoute } from "./PrivateRoute";
import { Endpoint } from "./Endpoint";
import { SimpleNavBar } from "../SimpleNavBar";
import { Col, Row } from "react-bootstrap";
import { ExitToApp, NavigateBefore } from "@material-ui/icons";
import { TableDetail } from "./TableDetail";

const axios = require('axios');

interface Props {

}

export const Api: React.FC<Props> = () => {

	const [authenticated, setAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const history = useHistory();

	const goBack = () => {
		history.goBack()
	}

	const handleLogout = () => {
		localStorage.removeItem('my-jwt');
		setAuthenticated(false);
		history.push("/api");
	}

	const authenticate = async () => {
		setIsLoading(true)
		await axios.post('http://localhost:4000/api/confirm-token', {},
			{
				headers: {
					Authorization: localStorage.getItem('my-jwt')
				}
			})
			.then((result: any) => {
					setAuthenticated(true)
				},
				(error: any) => {
				});
		setIsLoading(false);
		return null;
	}

	useEffect(() => {
		setIsLoading(true)
		if (!authenticated) {
			authenticate().then(r => (result: any) => {},
				(error: any) => setIsError(true))
		}
		setIsLoading(false)
	}, [authenticated])

	const noBackButton = ["/api", "/api/auth"]

	return (
		<div className={ "d-flex flex-column h-100" }>
			<Row>
				<Col>
					<SimpleNavBar/>
				</Col>
			</Row>
			<Row>
				{
					noBackButton.indexOf(history.location.pathname) === -1
						? (
							<Col className={ "d-flex justify-content-start" }>
								<Button variant="contained" color="primary"
								        startIcon={ <SvgIcon component={ NavigateBefore }/> } onClick={ goBack }>
									Back
								</Button>
							</Col>
						)
						: null
				}
				{
					authenticated
						? (
							<Col className={ "d-flex justify-content-end" }>
								<Button variant="contained" color="primary"
								        startIcon={ <SvgIcon component={ ExitToApp }/> } onClick={ handleLogout }>
									Logout
								</Button>
							</Col>
						)
						: null
				}
			</Row>
			<Row className={ "flex-grow-1" }>
				<Col className={ "d-flex flex-column justify-content-center" }>
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
								<Container maxWidth="sm">
									<Box my={ 20 }>
										<Switch>
											<Route path={ "/api/auth" } component={ Auth }/>
											<PrivateRoute path={ "/api/:name/detail/:productId" } component={ TableDetail }/>
											<PrivateRoute path={ "/api/:name" } component={ Endpoint }/>
											<PrivateRoute path={ "/" } component={ Welcome }/>
										</Switch>
									</Box>
								</Container>

							)
					}
				</Col>
			</Row>
		</div>
	);
};
