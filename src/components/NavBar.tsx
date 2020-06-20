import React from 'react';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {
    Link,
} from "react-router-dom";
import '../App.css';

interface Props {

}

const state = {
    dropDownLinks: [
        {title: 'Starter Hacks 2020', path: '/project/starterhacks2020'},
        {title: 'NSBE Hacks 2020', path: '/project/nsbehacks2020'},
        {title: 'Shuffl', path: '/project/shuffl'},
        {title: 'Astro Jump', path: '/project/astrojump'},
    ],
    navLink: [
        {title: 'Skills', path: '#skills'},
        {title: 'Education', path: '#education'},
        {title: 'Experience', path: '#experience'},
        {title: 'Extracurricular', path: '#extracurricular'},
    ]
};

export const NavBar: React.FC<Props> = () => {
    return (
        <Navbar bg="light" expand="lg" sticky={"top"}>
            <Navbar.Brand href="/react-site">Issack John</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                        {state.dropDownLinks.map(({title, path}) =>
                            <NavDropdown.Item>
                                <Link to={path}>{title}</Link>
                            </NavDropdown.Item>)}
                        <NavDropdown.Divider/>
                        <NavDropdown.Item>
                            <Link to="/project">See All</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    {state.navLink.map(({title, path}) => <Nav.Link href={path}>{title}</Nav.Link>)}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
