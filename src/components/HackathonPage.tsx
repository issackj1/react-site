import React from 'react';
import {NavBar} from "./NavBar";
import {Col, Container, ListGroup, Row} from "react-bootstrap";

interface Props {
    name: string,
    year: string;
    date: string,
    location: string,
    projectTitle: string,
    summary: string,
    howItWorks: string,

}

export const HackathonPage: React.FC<Props> = (props) => {
    const { name, year, date, location, projectTitle, summary, howItWorks} = props;
    return (<div>
        <NavBar/>
        <Container>
            <Row>
                <Col>
                    <h1>{name} {year}</h1>
                    <h5>{date} {location}</h5>
                    <br/>
                    <br/>
                    <h3>{projectTitle} Inspiration</h3>
                    <p>{summary}</p>
                    <h3>How it Works</h3>
                    <p>{howItWorks}</p>
                    <h3>Built with</h3>
                    <ListGroup horizontal>
                        <ListGroup.Item>Django</ListGroup.Item>
                        <ListGroup.Item>Python</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    </div>)
};
