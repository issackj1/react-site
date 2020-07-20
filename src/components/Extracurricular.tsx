import React from 'react';
import '../App.css';
import { Col, Row } from "react-bootstrap";
import { ExtracurricularContent } from "../constants";

interface Props {

}

export const Extracurricular: React.FC<Props> = () => {
	return (
		<div className={ "container" } id={ "extracurricular" }>
			<h1>EXTRACURRICULAR</h1>
			<Row>
				<Col>
					<h4>Hackathons Attended</h4>
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
					<h4>Favourite Books</h4>
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
