import React from 'react';
import '../App.css';

interface Props {

}

export const Education:React.FC<Props> = () => {
    return (
        <div id={"education"}>
            <h1>EDUCATION</h1>
            <h5>Education</h5>
            <ul>
                <li>Bachelor of Science Major in Computer Science</li>
                <li>High School Secondary Education</li>
            </ul>
        </div>
    );
};
