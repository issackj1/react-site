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
                    <Nav.Link href="#about">About</Nav.Link>
                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <Link to="/project/starterhacks2020">Starter Hacks 2020</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/project/nsbehacks2020">NSBE Hacks 2020</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/project/shuffl">Shuffl</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/project/astrojump">Astro Jump</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item>
                            <Link to="/project">See All</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#education">Education</Nav.Link>
                    <Nav.Link href="#experience">Experience</Nav.Link>
                    <Nav.Link href="#extracurricular">Extracurricular</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
