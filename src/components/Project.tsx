import React from 'react';
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { ProjectNavBar } from "./ProjectNavBar";

interface Props {
    navProps: {
        dropDownLinks: link[],
        navLinks: link[]
    },
    projectDetail: {
        name: string,
        year: string;
        date: string,
        location: string,
        projectTitle: string,
        summary: string,
        howItWorks: string,
        howWeBuilt: string,
        challenges: string,
        accomplishments: string,
        learned: string,
        next: string,
        repoUrl: string,
        technologies: string[],
    }
}
interface link  {
    title: string,
    path: string
}


export const Project: React.FC<Props> = (props) => {
    const {
        name, year, date, location, projectTitle, summary, howItWorks,
        howWeBuilt, challenges, accomplishments, learned, next, repoUrl, technologies
    } = props.projectDetail;

    return (<div>
        <ProjectNavBar />
        <Container>
            <Row>
                <Col>
                    <h1>{name} {year}</h1>
                    <h5 className="mb-5">{date} {location}</h5>
                    <h3>{projectTitle} Inspiration</h3>
                    <p>{summary}</p>

                    <h3>How it Works</h3>
                    <p>{howItWorks}</p>

                    <h3>How we built it</h3>
                    <p>{howWeBuilt}</p>

                    <h3>Challenges we ran into</h3>
                    <p>{challenges}</p>

                    <h3>Accomplishments that we're proud of</h3>
                    <p>{accomplishments}</p>

                    <h3>What we learned</h3>
                    <p>{learned}</p>

                    <h3>What's next for {projectTitle}</h3>
                    <p>{next}</p>
                    <a href={repoUrl}
                       rel={"noopener noreferrer"}
                       target={"_blank"}>Repository</a>

                    <h3>Built with</h3>
                    <ListGroup horizontal>
                        {technologies.map((name) => <ListGroup.Item>{name}</ListGroup.Item>)}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    </div>)
};
