// @ts-nocheck
import React, { useEffect, useState } from 'react';
import '../../App.css';
import { Card, Col, Row, Toast } from "react-bootstrap";
import { LoginForm } from "../forms/LoginForm";
import { SignUpForm } from "../forms/SignUpForm";
import { useHistory } from "react-router-dom";

const axios = require('axios');

interface Props {
}

export const Auth: React.FC<Props> = () => {

	const [show, setShow] = useState(false);
	const [toastMessage, setToastMessage] = useState('');
	const [isSignUp, setIsSignUp] = useState(false);
	const history = useHistory();

	useEffect(() => {
		if (localStorage.getItem('my-jwt')) {
			history.push("/api")
		}
	})

	const handleLogIn = async (email: String, password: String) => {
		await axios.post('http://localhost:4000/api/login/',
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
		axios.post('http://localhost:4000/api/register/',
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
				<Card.Title><h1>Sign Up</h1></Card.Title>
				<SignUpForm
					handleSubmit={ (username, email, password) => handleSignUp(username, email, password) }
					toggleSignUp={ () => setIsSignUp(false) }
				/>
			</>
		)

	const logInHeaders = () =>
		(
			<>
				<Card.Title><h1>Login</h1></Card.Title>
				<LoginForm
					handleSubmit={ (email, password) => handleLogIn(email, password) }
					toggleSignUp={ () => setIsSignUp(true) }
				/>
			</>
		)

	return (
		<>
			<Row>
				<Col>
					<div className={ "d-flex flex-column justify-content-center mb-3" } style={ { height: '50px' } }>
						{
							toastMessage
								? (
									<Toast className={ "mx-auto" } onClose={ () => setShow(false) } show={ show }
									       delay={ 3000 }
									       autohide>
										<Toast.Body>
											<strong>{ toastMessage }</strong>
										</Toast.Body>
									</Toast>
								)
								: null
						}
					</div>
				</Col>
			</Row>
			<Row>
				<Col md={ 5 } className={ "m-auto" }>
					<Card className="mx-auto" style={ { minWidth: '50%' } }>
						<Card.Body className={ "d-flex flex-column justify-content-around" }>
							{
								isSignUp
									? signUpHeaders()
									: logInHeaders()
							}
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};
