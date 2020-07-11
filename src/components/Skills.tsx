import React from 'react';
import '../App.css';
import { Col, Row } from "react-bootstrap";
import { SkillsContent } from "../constants";

interface Props {

}

export const Skills: React.FC<Props> = () => {
    return (
        <div className={"container"} id={"skills"}>
            <h1>{SkillsContent.title}</h1>
            <h5>{SkillsContent.subtitle}</h5>
            <Row>
                <Col>
                    <h3>Languages</h3>
                    <ul className={"list-unstyled"}>
                        {
                            SkillsContent.languages.map((language, i) => <li key={i}>{language}</li>)
                        }
                    </ul>
                </Col>
                <Col>
                    <h3>Libraries</h3>
                    <ul className={"list-unstyled"}>
                        {
                            SkillsContent.libraries.map((library, i) => <li key={i}>{library}</li>)
                        }
                    </ul>
                </Col>
                <Col>
                    <h3>Frameworks</h3>
                    <ul className={"list-unstyled"}>
                        {
                            SkillsContent.frameworks.map((framework, i) => <li key={i}>{framework}</li>)
                        }
                    </ul>
                </Col>
                <Col>
                    <h3>Databases</h3>
                    <ul className={"list-unstyled"}>
                        {
                            SkillsContent.databases.map((database, i) => <li key={i}>{database}</li>)
                        }
                    </ul>
                </Col>
            </Row>

        </div>
    );
};
