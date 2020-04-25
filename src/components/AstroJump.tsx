import React from 'react';
import {NavBar} from "./NavBar";
import {Col, Container, ListGroup, Row} from "react-bootstrap";

interface Props {

}

export const AstroJump: React.FC<Props> = () => {
    return (<div>
        <NavBar/>
        <Container>
            <Row>
                <Col>
                    <h1>Astro Jump</h1>
                    <h3>Built with</h3>
                    <ListGroup horizontal>
                        <ListGroup.Item>Java</ListGroup.Item>
                        <ListGroup.Item>JavaFX</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    </div>)
};
