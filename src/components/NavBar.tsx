import React from 'react';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import '../App.css';

function NarBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Issack John</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#home">About</Nav.Link>
                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                        <NavDropdown.Item href="starterhacks2020">StarterHacks 2020</NavDropdown.Item>
                        <NavDropdown.Item href="shuffl">Shuffl</NavDropdown.Item>
                        <NavDropdown.Item href="astrojump">Astro Jump</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="projects">See All</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#home">Skills</Nav.Link>
                    <Nav.Link href="#home">Education</Nav.Link>
                    <Nav.Link href="#home">Experience</Nav.Link>
                    <Nav.Link href="#home">Books Read</Nav.Link>
                    <Nav.Link href="#home">Contact</Nav.Link>
                    <Nav.Link href="#link">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NarBar;
