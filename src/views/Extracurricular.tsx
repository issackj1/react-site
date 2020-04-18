import React from 'react';
import '../App.css';

function Extracurricular() {
    return (
        <div>
            <h1>EXTRACURRICULAR</h1>
            <h5>Hackathons Attended</h5>
            <ul>
                <a href="https://devpost.com/software/starterhacks2020-klj3qb" rel={"noopener noreferrer"} target={"_blank"}>
                    <li>StarterHacks 2020</li>
                </a>
                <a href="https://devpost.com/software/black-tech-initiative-4fghix" rel={"noopener noreferrer"} target={"_blank"}>
                    <li>NSBE Hacks 20</li>
                </a>
            </ul>
            <h5>Books Read</h5>
            <ul>
                <li>The Great Gatsby</li>
                <li>Always Know What To Say</li>
                <li>35 Tips on Saving Money</li>
            </ul>
        </div>
    );
};

export default Extracurricular;
