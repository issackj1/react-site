// @ts-nocheck
import React from 'react';
import '../../App.css';
import { Home } from "./Home";
import { Col, Row } from "react-bootstrap";
import { Button, SvgIcon } from "@material-ui/core";
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
		<Row className={"d-flex flex-column"}>
			<Col className={ "d-flex justify-content-end"}>
				<Button variant="contained" color="primary" startIcon={ <SvgIcon component={ ExitToApp }/> }
				        onClick={ handleLogout }>
					Logout
				</Button>
			</Col>
			<Col md={ 11 } className={ "container d-flex text-center flex-column justify-content-center h-100 m-auto" }>
				<Home/>
			</Col>
		</Row>
	)
};
