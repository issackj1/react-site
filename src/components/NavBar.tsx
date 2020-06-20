import React from 'react';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {
    Link,
} from "react-router-dom";
import '../App.css';

interface Props {
    dropDownLinks: {
        title: string,
        path: string
    }[],
    navLinks: {
        title: string,
        path: string
    }[]
}

export const NavBar: React.FC<Props> = ({dropDownLinks, navLinks}) => {
    return (
        <Navbar bg="light" expand="lg" sticky={"top"}>
            <Navbar.Brand href="/react-site">Issack John</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                        {dropDownLinks.map(({title, path}) =>
                            <NavDropdown.Item>
                                <Link to={path}>{title}</Link>
                            </NavDropdown.Item>)}
                        <NavDropdown.Divider/>
                        <NavDropdown.Item>
                            <Link to="/project">See All</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    {navLinks.map(({title, path}) => <Nav.Link href={path}>{title}</Nav.Link>)}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
