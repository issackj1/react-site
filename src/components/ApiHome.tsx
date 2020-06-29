// @ts-nocheck
import React, { useState } from 'react';
import '../App.css';
import { BasicForm } from "./BasicForm";
import { Card, CardColumns, Col, Row, Toast } from "react-bootstrap";

const axios = require('axios');


interface Props {

}

export const ApiHome: React.FC<Props> = () => {

    const [response, setResponse] = useState([]);
    const [show, setShow] = useState(false);
    const [toastMessage, setToastMessage] = useState('Item already exists');

    const handleSubmit = (id) => {
        axios.post('/api/v1/getCubeMetaData/' + id)
            .then((result) => {
                    if (result.data.status === 'FAILED') {
                        setResponse(result.data.object.split('.')[0]);
                    } else {
                        for (let i = 0; i < result.data.length; i++) {
                            if (!response.some(e => e.object.productId === result.data[i].object.productId)) {
                                setResponse([...response, result.data[i]])
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

    return (
        <div className={"container d-flex text-center justify-content-center flex-column h-100 m-auto"}>
            <h1>Meta Data Table Search</h1>
            <Row><Col>Retrieve the metadata supporting the data at table level</Col></Row>
            <Row>
                <Col>
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header>
                            <strong className="mr-auto">{toastMessage}</strong>
                        </Toast.Header>
                    </Toast>
                </Col>
            </Row>
            <Row><BasicForm handleSubmit={(id) => handleSubmit(id)}/></Row>
            <Row>
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
        </div>
    );
};
