import React from 'react';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {
    Link,
} from "react-router-dom";
import '../App.css';

interface Props {

}

export const NavBar: React.FC<Props> = () => {
    return (
        <Navbar bg="light" expand="lg" sticky={"top"}>
            <Navbar.Brand href="/react-site">Issack John</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/*<Nav.Link href="/react-site">Home</Nav.Link>*/}
                    <Nav.Link href="#about">About</Nav.Link>
                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <Link to="hackathon:StarterHacks2020">Starter Hacks 2020</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="hackathon:NSBEHacks2020">NSBE Hacks 2020</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="shuffl">Shuffl</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="astrojump">Astro Jump</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="projects">See All</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#education">Education</Nav.Link>
                    <Nav.Link href="#experience">Experience</Nav.Link>
                    <Nav.Link href="#extracurricular">Extracurricular</Nav.Link>
                    {/*<Nav.Link href="#contact">Contact</Nav.Link>*/}
                    {/*<Nav.Link href="#resume">Resume</Nav.Link>*/}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
