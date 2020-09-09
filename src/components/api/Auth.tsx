// @ts-nocheck
import React, { useEffect, useState } from 'react';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { LoginForm } from "../forms/LoginForm";
import { SignUpForm } from "../forms/SignUpForm";
import { useHistory } from "react-router-dom";
import { Box, Card, CardContent, CardHeader, Container, Grid, Link, Snackbar, Typography } from "@material-ui/core";

const axios = require('axios');

interface Props {
}

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

function Alert(props: AlertProps) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export const Auth: React.FC<Props> = () => {

	const [show, setShow] = useState(false);
	const [toastMessage, setToastMessage] = useState('');
	const [isSignUp, setIsSignUp] = useState(false);
	const history = useHistory();
	const authenticated = !!localStorage.getItem('my-jwt')

	useEffect(() => {
		console.log('one')
		if (authenticated) {
			history.push("/api")
		}
	}, [authenticated])

	const handleLogIn = async (email: String, password: String) => {
		await axios.post('http://localhost:4000/api/login',
			{
				email: email,
				password: password
			})
			.then((result: any) => {
					localStorage.setItem('my-jwt', result.data.token);
					history.push('/api')
				},
				(error: any) => {
					setToastMessage("Incorrect email or password");
				}
			);
		setShow(true)
	};

	const handleSignUp = (username: string, email: string, password: string) => {
		axios.post('http://localhost:4000/api/register',
			{
				username: username,
				email: email,
				password: password
			})
			.then((result: any) => {
					localStorage.setItem('my-jwt', result.data.token);
					history.push('/api')
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
				<CardHeader>
					<Typography color={ "textPrimary" } variant="h4" component="h1" gutterBottom
					            align={ "center" }>
						Sign Up</Typography>
				</CardHeader>
				<SignUpForm
					handleSubmit={ (username, email, password) => handleSignUp(username, email, password) }
					toggleSignUp={ () => setIsSignUp(false) }
				/>
			</>
		)

	const logInHeaders = () =>
		(
			<>
				<CardHeader>
					<Typography color={ "textPrimary" } variant="h4" component="h1" gutterBottom
					            align={ "center" }>
						Sign in</Typography>
				</CardHeader>
				<LoginForm
					handleSubmit={ (email, password) => handleLogIn(email, password) }
					toggleSignUp={ () => setIsSignUp(true) }
				/>
			</>
		)

	return (
		<Container maxWidth="sm">
			<Box my={ 20 }>
				<Grid container
				      direction={ "column" }
				      spacing={ 2 }
				>
					<Grid container item xs={ 12 } sm={ 12 }>
						{
							toastMessage
								? (
									<Snackbar onClose={ () => setShow(false) } show={ show }
									       delay={ 3000 }
									       autohide>
										<Alert severity={"error"}>
											<strong>{ toastMessage }</strong>
										</Alert>
									</Snackbar>
								)
								: null
						}
					</Grid>
					<Grid container item xs={ 12 } sm={ 12 } direction={ "column" }>
						<Card>
							<CardContent className={ "d-flex flex-column justify-content-around" }>
								{
									isSignUp
										? signUpHeaders()
										: logInHeaders()
								}
							</CardContent>
						</Card>
						{ Copyright() }
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};
