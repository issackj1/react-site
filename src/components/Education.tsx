import React from 'react';
import '../App.css';

interface Props {

}

export const Education: React.FC<Props> = () => {
    return (
        <div className={"container"} id={"education"}>
            <h1>EDUCATION</h1>
            <h5>Education</h5>
            <ul className={"list-unstyled"}>
                <li>Bachelor of Science Major in Computer Science</li>
            </ul>
        </div>
    );
};
