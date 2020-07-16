// @ts-nocheck
import React from 'react';
import '../../App.css';
import { Home } from "./Home";
import { Col, Row } from "react-bootstrap";
import { Button, SvgIcon, Typography } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

interface Props {
}

export const Welcome: React.FC<Props> = (props) => {

	const history = useHistory();

	const handleLogout = () => {
		localStorage.removeItem('my-jwt');
		history.push("/api");
	}

	return (
		<>
			<Row>
				<Col className={ "d-flex justify-content-end" }>
					<Button variant="contained" color="primary" startIcon={ <SvgIcon component={ ExitToApp }/> }
					        onClick={ handleLogout }>
						Logout
					</Button>
				</Col>
			</Row>
			<Row>
				<Col className={"d-flex justify-content-center"}>
					<Typography variant={ "h3" }>What would you like to do?</Typography>
				</Col>
			</Row>
			<Row className={"d-flex flex-grow-1"}>
				<Col className={ "d-flex flex-row justify-content-center" }>
					<Home/>
				</Col>
			</Row>
		</>
	)
};
