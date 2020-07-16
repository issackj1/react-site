// @ts-nocheck
import React from 'react';
import '../../App.css';
import { Col, Row } from "react-bootstrap";
import { ApiCard } from "./ApiCard";

interface Props {

}

export const Home: React.FC<Props> = (props) => {

	return (
		<Row className={ "m-auto d-flex align-items-stretch justify-content-around" }>
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
	);
};
