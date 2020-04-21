import React from 'react';
import '../App.css';

interface Props {

}

export const Experience: React.FC<Props> = () => {
    return (
        <div id={"experience"}>
            <h1>EXPERIENCE</h1>
            <h5>Work Experience</h5>
            <ul>
                <li>Software Engineer at The Bank of Nova Scotia Jan 2020 - Apr 2020</li>
                <li>
                    Software Engineer at The Bank of Nova Scotia Sep 2019 - Dec 2019
                </li>
                <li>DevOps Engineer (PLATO) at The Bank of Nova Scotia May 2020 - Aug 2020</li>
            </ul>
        </div>
    );
};
