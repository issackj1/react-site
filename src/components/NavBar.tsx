import React from 'react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, } from "react-router-dom";
import '../App.css';
import { Parallax } from "react-spring/renderprops-addons";

interface Props {
    dropDownLinks: link[],
    navLinks: link[],
    parallax: Parallax
}

interface link {
    title: string,
    path: string
}

const logo = require('../logo.jpg');

export const NavBar: React.FC<Props> = ({dropDownLinks, navLinks, parallax}) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/react-site"><img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
                Issack John
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => parallax.scrollTo(1)}>About</Nav.Link>
                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                        {dropDownLinks.map(({title, path}, i) =>
                            <NavDropdown.Item key={i}>
                                <Link to={path}>{title}</Link>
                            </NavDropdown.Item>)}
                        <NavDropdown.Divider/>
                        <NavDropdown.Item>
                            <Link to="/project">See All</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    {navLinks.map(({title, path}, i) => <Nav.Link key={i}
                                                                  onClick={() => parallax.scrollTo(i+2)}>{title}</Nav.Link>
                    )}
                    <Nav.Link as={Link} to={"/api"}>API</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
