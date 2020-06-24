import React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link,} from "react-router-dom";
import '../App.css';

interface Props {
    dropDownLinks: link[],
    navLinks: link[]
}

interface link {
    title: string,
    path: string
}

const logo = require('../logo.jpg');


export const NavBar: React.FC<Props> = ({dropDownLinks, navLinks}) => {
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
                    <Nav.Link href="#about">About</Nav.Link>
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
                    {navLinks.map(({title, path}, i) => <Nav.Link key={i} href={path}>{title}</Nav.Link>)}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
