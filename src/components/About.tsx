import React from 'react';
import { Avatar, createStyles, Grid, Theme, Typography } from '@material-ui/core';
import { AboutContent } from "../constants";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		large: {
			width: theme.spacing(30),
			height: theme.spacing(30),
			margin: "auto"
		},
	}),
);

export const About: React.FC<Props> = () => {
	const profilePicture = require("../images/IMG_4774.JPG");
	const classes = useStyles();
	return (
		<Grid direction="row"
		      spacing={ 2 }>
			<Typography variant={ "h2" } align={ "center" }>{ AboutContent.title }</Typography>
			<Avatar variant={ "rounded" } alt="Issack John" src={ profilePicture } className={ classes.large }/>
			<Typography variant={ "body1" } style={ { fontSize: '24px' } }
			            align={ "center" }>{ AboutContent.summary }</Typography>
		</Grid>
	);
};
