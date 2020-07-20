import React from 'react';
import '../App.css';
import {Col, Row} from "react-bootstrap";

interface Props {

}

export const Extracurricular: React.FC<Props> = () => {
    return (
        <div className={"container"} id={"extracurricular"}>
            <h1>EXTRACURRICULAR</h1>
            <Row>
                <Col>
                    <h4>Hackathons Attended</h4>
                    <ul className={"list-unstyled"}>
                        <a href="https://devpost.com/software/starterhacks2020-klj3qb" rel={"noopener noreferrer"}
                           target={"_blank"}>
                            <li>StarterHacks 2020</li>
                        </a>
                        <a href="https://devpost.com/software/black-tech-initiative-4fghix" rel={"noopener noreferrer"}
                           target={"_blank"}>
                            <li>NSBE Hacks 2020</li>
                        </a>
                    </ul>
                </Col>
                <Col>
                    <h4>Favourite Books</h4>
                    <ul className={"list-unstyled"}>
                        <li>The Great Gatsby</li>
                        <li>Always Know What To Say</li>
                        <li>35 Tips on Saving Money</li>
                    </ul>
                </Col>
            </Row>
        </div>
    );
};
