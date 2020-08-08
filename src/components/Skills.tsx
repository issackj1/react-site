import React from 'react';
import { Col, Row } from "react-bootstrap";
import { SkillsContent } from "../constants";
import { Typography } from "@material-ui/core";

interface Props {

}

export const Skills: React.FC<Props> = () => {
    return (
        <div className={"container"} id={"skills"}>
            <Row>
                <Col>
                    <Typography variant={"h2"} align={"center"} gutterBottom>{SkillsContent.title}</Typography>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Typography variant={"h5"} align={"center"} gutterBottom>{SkillsContent.subtitle}</Typography>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Typography variant={"h4"}>Languages</Typography>
                    <ul className={"list-unstyled"}>
                        {
                            SkillsContent.languages.map((language, i) => <li key={i}>{language}</li>)
                        }
                    </ul>
                </Col>
                <Col>
                    <Typography variant={"h4"}>Libraries</Typography>
                    <ul className={"list-unstyled"}>
                        {
                            SkillsContent.libraries.map((library, i) => <li key={i}>{library}</li>)
                        }
                    </ul>
                </Col>
                <Col>
                    <Typography variant={"h4"}>Frameworks</Typography>
                    <ul className={"list-unstyled"}>
                        {
                            SkillsContent.frameworks.map((framework, i) => <li key={i}>{framework}</li>)
                        }
                    </ul>
                </Col>
                <Col>
                    <Typography variant={"h4"}>Databases</Typography>
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
