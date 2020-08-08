// @ts-nocheck
import React from 'react';
import { Home } from "./Home";
import { Col, Row } from "react-bootstrap";
import { Box, Container, Typography } from "@material-ui/core";

interface Props {
}

export const Welcome: React.FC<Props> = (props) => {

	return (
		<Container maxWidth="sm">
			<Box my={ 20 }>
				<Typography color={ "textPrimary" } component={ "h5" } variant={ "h2" } align={ "center" }>What
					would you like to
					do?</Typography>
				<Row className={ "d-flex flex-grow-1" }>
					<Col className={ "d-flex flex-row justify-content-center" }>
						<Home/>
					</Col>
				</Row>
			</Box>
		</Container>)
};
