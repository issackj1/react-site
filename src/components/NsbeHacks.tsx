import React from 'react';
import {NavBar} from "./NavBar";
import {Col, Container, ListGroup, Row} from "react-bootstrap";

interface Props {

}

export const NsbeHacks: React.FC<Props> = () => {
    return (<div>
        <NavBar/>
        <Container>
            <Row>
                <Col>
                    <h1>NSBE Hacks 2020</h1>
                    <h5>February 8-9, 2020
                        UNIVERSITY OF TORONTO</h5>
                    <br/>
                    <br/>
                    <h3>Black Tech Initiative Inspiration</h3>
                    <p>It started with the black community. Our powerful team wanted to find a gap that we could solve
                        with technology. Historically, black people have not been the leaders in the technology space.
                        Only recently, a strong interest on creating and running your own venture has arisen due to the
                        endless benefits with technology and black people have never been more excited to start their
                        very own start-up venture. We decided to deliver a truly unique experience to individuals that
                        have not really thought the specific details on running a company with specific emphasis on who
                        they can actually make an impact in today's society. To help the aspiring young black tech
                        community bridge the gap, we created the Black Tech Initiative.</p>
                    <h3>What it does</h3>
                    <p>The Black Tech Initiative is a start-up simulator directed towards the black technology
                        community, however it can be utilized by anyone interested in starting their own technology
                        company! Simply press Get Started on the main menu, and simulate your start-up! After the
                        exciting action, you will be given resources to actually go ahead and create what you built in
                        real life. You can take action by using our resources by connected to some mentors and signing
                        up to a start-up accelerator with your idea that you made within the simulator. Are you ready to
                        have fun and have the chance make a real difference? If so, try the Black Tech Initiative
                        today!</p>
                    <h3>How we built it</h3>
                    <p>We chose to use the classic MERN stack hosted on IBM Cloud.s</p>
                    <h3>Challenges we ran into</h3>
                    <p>We ran into more challenges then we could manage, but that's all part of the fun! To start, the
                        IBM starter kit for the MERN stack that we were using turned out to be outdated and we spent the
                        first few hours of our hack debugging and trying to update our Node.js and MongoDB version to be
                        the right one. Next, the workflow of the simulator contained some hidden problems that only came
                        up during production. Lastly, the front-end component, written in React caused some difficulties
                        that made sure one of our developers, Issack, would not get a wink of shuteye the entire day!
                        Overall, this Hackathon was definitely a rollercoaster, but we learned a lot and got it
                        done!</p>
                    <h3>Accomplishments that we're proud of</h3>
                    <p>A few accomplishments that we can be very proud of is getting an entire Node.js backend with
                        Express and MongoDB working flawlessly. This was one of the three major roadblocks that we are
                        happy to have completed. Next, we are particularly proud of the research material that we came
                        up with. This material can really help empower the black youth tech community and can make an
                        impact in a very positive way. Last but not least, the accomplishment that was the most visually
                        appealing was our stellar front-end component written in React and was very easy on the eyes.
                        This full-stack application engineered a solid UI / UX experience that gives off a strong
                        impression of an established foundation with lightning quick technology.</p>
                    <h3>What we learned</h3>
                    <p>This was a 24 hour learning experience. This put us out of the comfort zone and into the growth
                        zone. We did not stop learning, and that's what matters most. A few things that we learning was
                        React, Express.js, IBM Cloud, MongoDB, and Black Communities. This project gave us an overview
                        of how a full stack system should get designed and implemented in a proper function. Super happy
                        to be apart of NSBEHacks2020!</p>
                    <h3>What's next for Black Tech Initiative</h3>
                    <p>The Black Tech Initiative can grow in many different ways. Currently, we are only providing
                        resources to people who are running their company through the start-up simulator. This is great
                        first step however, we want to take it a step further and actually connect people with
                        established mentors in the industry. This can bridge the gap when it comes to connecting the
                        mentor with the mentee and really take a first step to feasibly creating any type of real
                        venture.</p>
                    <h3>Built with</h3>
                    <ListGroup horizontal>
                        <ListGroup.Item> express.js</ListGroup.Item>
                        <ListGroup.Item>ibm-cloud</ListGroup.Item>
                        <ListGroup.Item>mongodb</ListGroup.Item>
                        <ListGroup.Item>node.js</ListGroup.Item>
                        <ListGroup.Item>react</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    </div>)
};
