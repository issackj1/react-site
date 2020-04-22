import React from 'react';
import {NavBar} from "./NavBar";
import {Col, Container, Row} from "react-bootstrap";

interface Props {

}

export const AstroJump: React.FC<Props> = () => {
    return (<div>
        <NavBar/>
        <Container>
            <Row>
                <Col>
                    <h1>Astro Jump</h1>
                </Col>
            </Row>
        </Container>
    </div>)
};
