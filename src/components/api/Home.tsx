// @ts-nocheck
import React, { useState } from 'react';
import '../../App.css';
import { BasicForm } from "../forms/BasicForm";
import { Card, CardColumns, Col, Row, Toast } from "react-bootstrap";
import { Button, SvgIcon } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";

const axios = require('axios');

interface Props {
    setAuthenticated: () => any
}

export const Home: React.FC<Props> = (props) => {

    const { setAuthenticated } = props;

    const [response, setResponse] = useState([]);
    const [show, setShow] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const handleSubmit = (id) => {
        axios.post('http://localhost:4000/api/v1/getCubeMetaData/' + id)
            .then((result) => {
                    if (result.data.status === 'FAILED') {
                        setResponse(result.data.object.split('.')[0]);
                    } else {
                        for (let i = 0; i < result.data.length; i++) {
                            if (!response.some(e => e.object.productId === result.data[i].object.productId)) {
                                setResponse(prevState => {
                                    return { ...prevState, ...result.data[i] }
                                })
                            } else {
                                setToastMessage('Item already exists');
                                setShow(true)
                            }
                        }
                    }
                },
                (error) => {
                    setToastMessage(error.message);
                    setShow(true)
                }
            );
    };

    const handleLogout = () => {
        localStorage.removeItem('my-jwt');
        setAuthenticated()
    }

    return (
        <>
            <Row className={"d-flex justify-content-end"}>
                <Col className={"col-1"}>
                    <Button variant="contained" color="primary" startIcon={<SvgIcon component={ExitToApp}/>}
                            onClick={handleLogout}>
                        Logout
                    </Button>
                </Col>
            </Row>
            <Row style={{ height: '50px' }}>
                <Col className={"d-flex justify-content-center"}>
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Body>
                            <strong>{toastMessage}</strong>
                        </Toast.Body>
                    </Toast>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Meta Data Table Search</h1>
                    <h5>Retrieve the metadata supporting the data at table level</h5>
                    <BasicForm handleSubmit={(id) => handleSubmit(id)}/>
                </Col>
            </Row>
            <Row className={"flex-grow-1"}>
                <CardColumns>
                    {response.map(({ status, object }, i) =>
                        <Card key={i}>
                            <Card.Header>{object.cubeTitleEn}</Card.Header>
                            <Card.Body>
                                <Card.Title>Product ID: {object.productId}</Card.Title>
                                <Card.Text>Status: {object.archiveStatusEn}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small>Released: {object.releaseTime}</small>
                            </Card.Footer>
                        </Card>)}
                </CardColumns>
            </Row>
        </>
    );
};
