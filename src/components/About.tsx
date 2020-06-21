import React from 'react';
import '../App.css';

interface Props {
}

export const About:React.FC<Props> = (props) => {
    return (
        <div className={"container"} id={"about"}>
            <h1>ABOUT ME</h1>
            <h5>Who am i?</h5>
            <p>Hi I'm Issack John, I am a fourth-year computer science student at the University of Calgary. I have a
                consistent and hardworking attitude which can be attributed to my approach to difficult problems with a
                road map. I believe this to be the most effective way to approach problems, prevent them from becoming
                overwhelming and ensure that you can deal with any issues that arise through the developmental
                process.</p>
        </div>
    );
};
