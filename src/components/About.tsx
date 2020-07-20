// @ts-nocheck
import React from 'react';
import '../App.css';
import { Col, Figure, Row } from 'react-bootstrap'
import { Typography } from '@material-ui/core';
import { AboutContent } from "../constants";

interface Props {
}

export const About: React.FC<Props> = () => {
    const profilePicture = require("../images/IMG_4774.JPG");
    return (
        <div className={"container"} id={"about"}>
            <Row>
                <Col>
                    <Typography variant={"h2"} align={"center"}>{AboutContent.title}</Typography>
                </Col>
            </Row>
            <Row>
                <Figure className={"d-flex flex-row mt-5"}>
                    <Figure.Image
                        width={428}
                        height={451}
                        alt="428x451"
                        src={profilePicture}
                        rounded
                    />
                    <Figure.Caption className={"d-flex flex-column justify-content-center ml-3"}>
                        <p style={{ fontSize: '24px' }}>{AboutContent.summary}</p>
                    </Figure.Caption>
                </Figure>
            </Row>
        </div>
    );
};
