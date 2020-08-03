import React from 'react';
import '../App.css';

interface Props {

}

export const Experience: React.FC<Props> = () => {
    return (
        <div className={"container"} id={"experience"}>
            <h1>fdsfdsfsdf</h1>
            <h5>Work Experience</h5>
            <ul className={"list-unstyled"}>
                <li>DevOps Engineer Co-op (PLATO Accelerator Core) at The Bank of Nova Scotia May 2020 - Aug 2020</li>
                <li>Software Engineer Co-op at The Bank of Nova Scotia Jan 2020 - May 2020</li>
                <li>Software Engineer Co-op at The Bank of Nova Scotia Sep 2019 - Dec 2019</li>
            </ul>
        </div>
    );
};
