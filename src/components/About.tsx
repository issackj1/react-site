import React from 'react';
import '../App.css';
import { Figure } from 'react-bootstrap'

interface Props {
}

export const About: React.FC<Props> = () => {
    const profilePicture = require('../images/IMG_4774.JPG');
    return (
        <div className={"container"} id={"about"}>
            <h1>ABOUT ME</h1>
            <Figure>
                <Figure.Image
                    width={428}
                    height={451}
                    alt="428x451"
                    src={profilePicture}
                    rounded
                />
                <Figure.Caption>
                    <h5>Hi I'm Issack. I am a fourth-year computer science student at the University of Calgary. I have
                        experience
                        working with agile teams and participating in all stages of the software development cycle. I am
                        fueled by
                        my passion for tackling and solving difficult problems.</h5>
                </Figure.Caption>
            </Figure>
        </div>
    );
};
