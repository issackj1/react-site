import React from 'react';
import '../App.css';

interface Props {

}

export const Skills:React.FC<Props> = () => {
    return (
        <div id={"skills"}>
            <h1>MY SPECIALTY</h1>
            <h5>My Skills</h5>
            <ul>
                <li>Java</li>
                <li>Python</li>
                <li>Django</li>
                <li>React</li>
            </ul>
        </div>
    );
};
