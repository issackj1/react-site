import React from 'react';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import '../App.css';

interface Props {

}

export const NavBar: React.FC<Props> = () => {
    return (
        <Navbar bg="light" expand="lg" sticky={"top"}>
            <Navbar.Brand href="/">Issack John</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="react-site">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                        <NavDropdown.Item href="starterhacks2020">Starter Hacks 2020</NavDropdown.Item>
                        <NavDropdown.Item href="nsbehacks2020">NSBE Hacks 2020</NavDropdown.Item>
                        <NavDropdown.Item href="shuffl">Shuffl</NavDropdown.Item>
                        <NavDropdown.Item href="astrojump">Astro Jump</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="projects">See All</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#education">Education</Nav.Link>
                    <Nav.Link href="#experience">Experience</Nav.Link>
                    <Nav.Link href="#books">Books Read</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Nav.Link href="#resume">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
