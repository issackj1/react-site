import React from 'react';
import { Navbar } from "react-bootstrap";
import '../App.css';

interface Props {
}

const logo = require('../logo.jpg');

export const ProjectNavBar: React.FC<Props> = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="/"><img
				alt=""
				src={ logo }
				width="30"
				height="30"
				className="d-inline-block align-top"
			/>{ ' ' }
				Issack John
			</Navbar.Brand>
		</Navbar>
	);
};
