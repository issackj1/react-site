import React from 'react';
import {NavBar} from "./NavBar";
import {Col, Container, ListGroup, Row} from "react-bootstrap";

interface Props {

}

export const Shuffl: React.FC<Props> = () => {
    return (<div>
        <NavBar/>
        <Container>
            <Row>
                <Col>
                    <h1>Shuffl</h1>
                    <h3>Built with</h3>
                    <ListGroup horizontal>
                        <ListGroup.Item>Express.js</ListGroup.Item>
                        <ListGroup.Item>node.js</ListGroup.Item>
                        <ListGroup.Item>Mongodb</ListGroup.Item>
                        <ListGroup.Item>React</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    </div>)
};
