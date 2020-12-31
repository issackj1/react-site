// @ts-nocheck
import React, { useEffect, useState } from 'react';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { LoginForm } from "../forms/LoginForm";
import { SignUpForm } from "../forms/SignUpForm";
import { useHistory } from "react-router-dom";
import { Box, Card, CardContent, CardHeader, Container, Grid, Snackbar } from "@material-ui/core";
import {Copyright} from "../../sharedFunctions";

const axios = require('axios');

interface Props {
}

function Alert(props: AlertProps) {
	return <MuiAlert elevation={ 6 } variant="filled" { ...props } />;
}


export const Auth: React.FC<Props> = () => {

	const [show, setShow] = useState(false);
	const [toastMessage, setToastMessage] = useState('');
	const [isSignUp, setIsSignUp] = useState(false);
	const history = useHistory();
	const authenticated = !!localStorage.getItem('my-jwt')

	useEffect(() => {
		if (authenticated) {
			history.push("/athena")
		}
	}, [authenticated, history])

	const handleLogIn = async (email: String, password: String) => {
		await axios.post('/api/login',
			{
				email: email,
				password: password
			})
			.then((result: any) => {
					localStorage.setItem('my-jwt', result.data.token);
					history.push('/athena')
				},
				(error: any) => {
					setToastMessage("Incorrect email or password");
				}
			);
		setShow(true)
	};

	const handleSignUp = (username: string, email: string, password: string) => {
		axios.post('/api/register',
			{
				username: username,
				email: email,
				password: password
			})
			.then((result: any) => {
					localStorage.setItem('my-jwt', result.data.token);
					history.push('/athena')
				},
				(error: any) => {
					setToastMessage("Email is already in use");
					setShow(true)
				}
			);
	}

	const signUpHeaders = () =>
		(
			<>
				<CardHeader title={ "Sign Up" }/>
				<CardContent>
					<SignUpForm
						handleSubmit={ (username, email, password) => handleSignUp(username, email, password) }
						toggleSignUp={ () => setIsSignUp(false) }
					/>
				</CardContent>
			</>
		)

	const logInHeaders = () =>
		(
			<>
				<CardHeader title={ "Sign In" }/>
				<CardContent>
					<LoginForm
						handleSubmit={ (email, password) => handleLogIn(email, password) }
						toggleSignUp={ () => setIsSignUp(true) }
					/>
				</CardContent>
			</>
		)

	return (
		<Container maxWidth="sm">
			<Box my={ 4 }>
				<Grid container
				      direction={ "column" }
				      justify="center"
				      alignItems="center"
				      spacing={ 2 }
				>
					<Grid container item xs={ 12 } sm={ 12 }>
						{
							toastMessage
								? (
									<Snackbar onClose={ () => setShow(false) } show={ show }
									          delay={ 3000 }
									          autohide>
										<Alert severity={ "error" }>
											<strong>{ toastMessage }</strong>
										</Alert>
									</Snackbar>
								)
								: null
						}
					</Grid>
					<Grid container item xs={ 12 } sm={ 12 } direction={ "column" }>
						<Card>
							{
								isSignUp
									? signUpHeaders()
									: logInHeaders()
							}
						</Card>
						{ Copyright() }
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};
