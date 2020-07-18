import React, { useState } from 'react';
import '../../App.css';
import { Route, Switch, useHistory } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Button, CircularProgress, Fade, SvgIcon } from "@material-ui/core";
import { Auth } from "./Auth";
import { PrivateRoute } from "./PrivateRoute";
import { Endpoint } from "./Endpoint";
import { SimpleNavBar } from "../SimpleNavBar";
import { Col, Row } from "react-bootstrap";
import { NavigateBefore } from "@material-ui/icons";
import { TableDetail } from "./TableDetail";

const axios = require('axios');

interface Props {

}

export const Api: React.FC<Props> = () => {

	const [isLoading, setIsLoading] = useState(false);
	const history = useHistory();

	const goBack = () => {
		history.goBack()
	}

	const handleLogout = () => {
		setIsLoading(true)
		localStorage.removeItem('my-jwt');
		history.push("/api");
		setIsLoading(false)
	}

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
			</Row>
			<Row className={ "flex-grow-1" }>
				<Col>
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
									<Route path={ "/api/auth" } component={ Auth }/>
									<PrivateRoute handleLogout={ () => handleLogout() }
									              path={ "/api/:name/detail/:productId" } component={ TableDetail }/>
									<PrivateRoute handleLogout={ () => handleLogout() } path={ "/api/:name" }
									              component={ Endpoint }/>
									<PrivateRoute handleLogout={ () => handleLogout() } path={ "/" } component={ Welcome }/>
								</Switch>
							)
					}
				</Col>
			</Row>
		</div>
	);
};
