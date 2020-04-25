import React from 'react';
import '../App.css';
import {Col, Row} from "react-bootstrap";

interface Props {

}

export const Skills: React.FC<Props> = () => {
    return (
        <div id={"skills"}>
            <h1>MY SPECIALTY</h1>
            <h5>My Skills</h5>
            <Row>
                <Col>
                    <h3>Languages</h3>
                    <ul className={"list-unstyled"}>
                        <li>Java</li>
                        <li>Python</li>
                        <li>C++</li>
                        <li>C</li>
                    </ul>
                </Col>
                <Col>
                    <h3>Frameworks</h3>
                    <ul className={"list-unstyled"}>
                        <li>Django</li>
                        <li>React</li>
                        <li>Express.js</li>
                        <li></li>
                    </ul>
                </Col>
                <Col>
                    <h3>Databases</h3>
                    <ul className={"list-unstyled"}>
                        <li>Mongodb</li>
                        <li>SQLite3</li>
                        <li>PostgreSQL</li>
                        <li></li>
                    </ul>
                </Col>
            </Row>

        </div>
    );
};
