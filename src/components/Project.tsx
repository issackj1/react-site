import React from 'react';
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { SimpleNavBar } from "./SimpleNavBar";
import { useParams } from "react-router-dom";
import { HackathonOne, HackathonTwo, NoProject, ProjectOne, ProjectTwo } from "../constants";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface Props {

}

function getProps(name: string) {

	let project;
	switch ( name ) {
		case  "starterhacks2020":
			project = HackathonOne;
			break;
		case "nsbehacks2020":
			project = HackathonTwo;
			break;
		case "shuffl":
			project = ProjectOne;
			break;
		case "astrojump":
			project = ProjectTwo;
			break;
		default:
			project = NoProject;
	}
	return project;
}

const useStyles = makeStyles({
	title: {
		fontSize: 42,
	}
});

export const Project: React.FC<Props> = () => {

	const { name } = useParams();

	const {
		title, year, date, location, projectTitle, summary, howItWorks,
		howWeBuilt, challenges, accomplishments, learned, next, repoUrl, technologies
	} = getProps(name);


	const classes = useStyles();

	return (<div>
		<SimpleNavBar/>
		<Container>
			<Row>
				<Col>
					<Typography variant={ "h1" } className={ classes.title } color="textPrimary"
					            gutterBottom>{ title } { year }</Typography>
					<Typography variant={ "h5" } color="textSecondary" gutterBottom>{ date } { location }</Typography>
					<Typography variant={ "h4" } gutterBottom>{ projectTitle } Inspiration</Typography>
					<Typography variant={ "body1" } gutterBottom>{ summary }</Typography>

					<Typography variant={ "h4" } gutterBottom>How it Works</Typography>
					<Typography variant={ "body1" } gutterBottom>{ howItWorks }</Typography>

					<Typography variant={ "h4" } gutterBottom>How we built it</Typography>
					<Typography variant={ "body1" } gutterBottom>{ howWeBuilt }</Typography>

					<h3>Challenges we ran into</h3>
					<p>{ challenges }</p>
					<Typography variant={ "h4" } gutterBottom>How we built it</Typography>
					<Typography variant={ "body1" } gutterBottom>{ howWeBuilt }</Typography>

					<Typography variant={ "h4" } gutterBottom>Accomplishments that we're proud of</Typography>
					<Typography variant={ "body1" } gutterBottom>{ accomplishments }</Typography>

					<Typography variant={ "h4" } gutterBottom>What we learned</Typography>
					<Typography variant={ "body1" } gutterBottom>{ learned }</Typography>

					<Typography variant={ "h4" } gutterBottom>What's next for { projectTitle }</Typography>
					<Typography variant={ "body1" } gutterBottom>{ next }</Typography>
					<a href={ repoUrl }
					   rel={ "noopener noreferrer" }
					   target={ "_blank" }>Repository</a>

					<Typography variant={ "h4" } gutterBottom>Built with</Typography>
					<ListGroup horizontal>
						{ technologies.map((name: React.ReactNode) => <ListGroup.Item>{ name }</ListGroup.Item>) }
					</ListGroup>
				</Col>
			</Row>
		</Container>
	</div>)
};
