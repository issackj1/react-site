// @ts-nocheck
import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

interface Props {
	title: string,
	description: string,
	to: string
}

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	title: {
		fontSize: 24,
	}
});

export const ApiCard: React.FC<Props> = (props) => {

	const { title, description, to } = props;
	const classes = useStyles();

	return (
		<Card className={ classes.root }>
			<CardActionArea style={ { textDecoration: 'none' } } component={ Link } to={ to }>
				<CardContent>
					<Typography className={ classes.title } color="textSecondary" gutterBottom>
						{ title }
					</Typography>
					<Typography variant="body2" component="p">
						{ description }
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
