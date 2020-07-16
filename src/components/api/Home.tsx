// @ts-nocheck
import React from 'react';
import '../../App.css';
import { Col, Row } from "react-bootstrap";
import { Typography } from "@material-ui/core";
import { ApiCard } from "./ApiCard";

interface Props {

}

export const Home: React.FC<Props> = (props) => {

	return (
		<>
			<Row>
				<Col>
					<Typography variant={ "h3" }>What would you like to do?</Typography>
				</Col>
			</Row>
			<Row className={"flex-row justify-content-center"}>
				<Col>
					<ApiCard title={ "See All Tables" }
					         description={ "Complete inventory of data tables available through this Statistics Canada API" }
					         to={ "/api/seeAll" }
					/>
				</Col>
				<Col>
					<ApiCard title={ "Meta Data Table Search" }
					         description={ "Retrieve the metadata supporting the data at table level" }
					         to={ "/api/searchAll" }
					/>
				</Col>
			</Row>
		</>
	);
};
