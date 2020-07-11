import React from 'react';
import '../App.css';
import { Col, Figure, Row } from 'react-bootstrap'
import { Typography } from '@material-ui/core';

interface Props {
}

export const About: React.FC<Props> = () => {
    const profilePicture = require('../images/IMG_4774.JPG');
    return (
        <div className={"container d-flex flex-column justify-content-around"} id={"about"}>
            <Row>
                <Col>
                    <Typography variant={"h2"}>ABOUT ME</Typography>
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
                        <p style={{ fontSize: '24px' }}>Hi I'm Issack. I am a fourth-year computer science student at
                            the
                            University of Calgary. I have
                            experience
                            working with agile teams and participating in all stages of the software development cycle.
                            I am
                            fueled by
                            my passion for tackling and solving difficult problems.</p>
                    </Figure.Caption>
                </Figure>
            </Row>
        </div>
    );
};
