import React from 'react';
import '../App.css';
import {Figure, Image} from 'react-bootstrap'

interface Props {
}

export const About: React.FC<Props> = (props) => {
    const profilePicture = require('../images/IMG_4774.JPG');
    // @ts-ignore
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
                    <h5>Hi I'm Issack. I am a fourth-year computer science student at the University of Calgary. I have experience
                        working with agile teams and participating in all steps of the software development cycle. I am fueled by
                        my passion for tackling and solving difficult problems.</h5>
                </Figure.Caption>
            </Figure>
            {/*<Image className={"mb-2"} src={profilePicture} rounded/>*/}
            {/*<h5>Who am i?</h5>*/}
            {/*<p>Issack JohnI am a fourth-year computer science student at the University of Calgary. I have a*/}
            {/*    consistent and hardworking attitude which can be attributed to my approach to difficult problems with a*/}
            {/*    road map. I believe this to be the most effective way to approach problems, prevent them from becoming*/}
            {/*    overwhelming and ensure that you can deal with any issues that arise through the developmental*/}
            {/*    process.</p>*/}
        </div>
    );
};
