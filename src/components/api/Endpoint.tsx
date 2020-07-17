// @ts-nocheck
import React from 'react';
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { GetCubeMetaData } from "../forms/GetCubeMetaData";
import { GetAllCubes } from "../forms/GetAllCubes";


interface Props {
}


export const Endpoint: React.FC<Props> = (props) => {

	const { name } = useParams();

	const getProps = (name: string) => {

		let form, title;
		switch ( name ) {
			case  "seeAll":
				title = 'See All Tables';
				form = <GetAllCubes />;
				break;
			case "searchAll":
				title = 'Search All Tables';
				form =
					<GetCubeMetaData />;
				break;
			default:
				title = 'three';
				form = <GetCubeMetaData/>;
		}
		return {
			title: title,
			form: form,
		};
	}

	const { title, form } = getProps(name);

	return (
		<>
			<Row>
				<Col className={ "d-flex justify-content-center" }>
					{ title }
				</Col>
			</Row>
			<Row>
				<Col className={ "d-flex flex-column justify-content-center" }>
					{ form }
				</Col>
			</Row>
		</>
	);
}
