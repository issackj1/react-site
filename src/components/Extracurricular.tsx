import React from 'react';
import { Col, Row } from "react-bootstrap";
import { ExtracurricularContent } from "../constants";
import { Typography } from "@material-ui/core";

interface Props {

}

export const Extracurricular: React.FC<Props> = () => {
	return (
		<div className={ "container" } id={ "extracurricular" }>
			<Typography variant={ "h2" } gutterBottom>{ ExtracurricularContent.title }</Typography>
			<Row>
				<Col>
					<Typography variant={ "h4" } gutterBottom>Hackathons Attended</Typography>
					<ul className={ "list-unstyled" }>
						<a href="https://devpost.com/software/starterhacks2020-klj3qb" rel={ "noopener noreferrer" }
						   target={ "_blank" }>
							<li>StarterHacks 2020</li>
						</a>
						<a href="https://devpost.com/software/black-tech-initiative-4fghix"
						   rel={ "noopener noreferrer" }
						   target={ "_blank" }>
							<li>NSBE Hacks 2020</li>
						</a>
					</ul>
				</Col>
				<Col>
					<Typography variant={ "h4" } gutterBottom>Favourite Books</Typography>
					<ul className={ "list-unstyled" }>
						{
							ExtracurricularContent.books.map((book, i) => <li key={ i }>{ book.name }</li>)
						}
					</ul>
				</Col>
			</Row>
		</div>
	);
};
