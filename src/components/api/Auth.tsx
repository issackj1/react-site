import React, { useState } from 'react';
import '../../App.css';
import { Card, Toast } from "react-bootstrap";
import { LoginForm } from "../forms/LoginForm";
import { SignUpForm } from "../forms/SignUpForm";

const axios = require('axios');

interface Props {
    setAuthenticated: () => any
}

export const Auth: React.FC<Props> = ({ setAuthenticated }) => {

    const [show, setShow] = useState(false);
    const [toastMessage, setToastMessage] = useState('Item already exists');
    const [isSignUp, setIsSignUp] = useState(false);

    const handleLogIn = (email: String, password: String) => {
        axios.post('http://localhost:4000/api/login/',
            {
                email: email,
                password: password
            })
            .then((result: any) => {
                    setAuthenticated()
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
                    setAuthenticated()
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
                    handleSubmit={(username, email, password) => handleSignUp(username, email, password)}
                    toggleSignUp={() => setIsSignUp(false)}
                />
            </>
        )

    const logInHeaders = () =>
        (
            <>
                <Card.Title><h1>Login</h1></Card.Title>
                <LoginForm
                    handleSubmit={(email, password) => handleLogIn(email, password)}
                    toggleSignUp={() => setIsSignUp(true)}
                />
            </>
        )

    return (
        <>
            <div className={"d-flex flex-column justify-content-center"} style={{ height: '50px' }}>
                <Toast className={"mx-auto"} onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Body>
                        <strong>{toastMessage}</strong>
                    </Toast.Body>
                </Toast>
            </div>
            <Card className="mx-auto" style={{ minWidth: '50%' }}>
                <Card.Body className={"d-flex flex-column justify-content-around"}>
                    {
                        isSignUp
                            ? signUpHeaders()
                            : logInHeaders()
                    }
                </Card.Body>
            </Card>
        </>
    );
};