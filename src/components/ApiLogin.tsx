import React, { useState } from 'react';
import '../App.css';
import { Card, Toast } from "react-bootstrap";
import { LoginForm } from "./forms/LoginForm";
import { SignUpForm } from "./forms/SignUpForm";

const axios = require('axios');

interface Props {

}

export const ApiLogin: React.FC<Props> = () => {

    const [response, setResponse] = useState([]);
    const [show, setShow] = useState(false);
    const [toastMessage, setToastMessage] = useState('Item already exists');
    const [isSignUp, setIsSignUp] = useState(false);

    const handleLogIn = (email: String, password: String) => {
        axios.post('http://3.94.8.68:4000/api/login/')
            .then((result: any) => {

                },
                (error: any) => {
                    setToastMessage(error.message);
                    setShow(true)
                }
            );
    };

    const handleSignUp = (email: String, password: string) => {
        axios.post('http://3.94.8.68:4000/api/register/')
            .then((result: any) => {

                },
                (error: any) => {
                    setToastMessage(error.message);
                    setShow(true)
                }
            );
    }

    const signUpHeaders = () =>
        (
            <>
                <Card.Title><h1>Sign Up</h1></Card.Title>
                <SignUpForm
                    handleSubmit={(email, password) => handleSignUp(email, password)}
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
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header>
                    <strong className="mr-auto">{toastMessage}</strong>
                </Toast.Header>
            </Toast>
            <Card className="text-center w-50 mx-auto">
                <Card.Body>
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
