import React, { useState } from 'react';
import '../App.css';
import { Card, Toast } from "react-bootstrap";
import { LoginForm } from "./LoginForm";

const axios = require('axios');

interface Props {

}

export const ApiLogin: React.FC<Props> = () => {

    const [response, setResponse] = useState([]);
    const [show, setShow] = useState(false);
    const [toastMessage, setToastMessage] = useState('Item already exists');

    const handleSubmit = (email: String, password: String) => {
        axios.post('http://3.94.8.68:4000/api/login/')
            .then((result: any) => {

                },
                (error: any) => {
                    setToastMessage(error.message);
                    setShow(true)
                }
            );
    };

    return (
        <>
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header>
                    <strong className="mr-auto">{toastMessage}</strong>
                </Toast.Header>
            </Toast>
            <Card className="text-center w-50 mx-auto">
                <Card.Body>
                    <Card.Title><h1>Login</h1></Card.Title>
                    <LoginForm handleSubmit={(email, password) => handleSubmit(email, password)}/>
                </Card.Body>
            </Card>
        </>
    );
};
