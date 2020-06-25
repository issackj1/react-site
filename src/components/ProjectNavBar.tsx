import React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link,} from "react-router-dom";
import '../App.css';
import {Parallax} from "react-spring/renderprops-addons";

interface Props {
}

const logo = require('../logo.jpg');

export const ProjectNavBar: React.FC<Props> = () => {
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
        </Navbar>
    );
};
