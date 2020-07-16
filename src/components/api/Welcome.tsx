// @ts-nocheck
import React from 'react';
import '../../App.css';
import { Home } from "./Home";
import { Col, Row } from "react-bootstrap";
import { Typography } from "@material-ui/core";

interface Props {
}

export const Welcome: React.FC<Props> = (props) => {

	return (
		<>
			<Row>
				<Col className={ "d-flex justify-content-center" }>
					<Typography variant={ "h3" }>What would you like to do?</Typography>
				</Col>
			</Row>
			<Row className={ "d-flex flex-grow-1" }>
				<Col className={ "d-flex flex-row justify-content-center" }>
					<Home/>
				</Col>
			</Row>
		</>
	)
};
