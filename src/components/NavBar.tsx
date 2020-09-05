// @ts-nocheck
import React from 'react';
import { AppBar, Button, Link, Toolbar, Typography, } from "@material-ui/core";
import { Parallax } from "react-spring/renderprops-addons";
import { navProps } from "../constants";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
	parallax: Parallax
}

const useStyles = makeStyles((theme) => ({
	root: {
		'& > * + *': {
			marginLeft: theme.spacing(2),
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

const logo = require('../logo.jpg');

export const NavBar: React.FC<Props> = ({ parallax }) => {

	const { dropDownLinks, navLinks } = navProps;
	const [auth, setAuth] = React.useState(false);
	const classes = useStyles();

	return (
		<div className={ classes.root }>
			<AppBar position="static">
				<Toolbar variant={"dense"}>
					<Typography variant="h6" className={ classes.title }>
						<Link underline={ "none" } color={ "inherit" } href={ "/" }>
							Issack John
						</Link>
					</Typography>

					{ navLinks.map(({ title }, i) => <Button onClick={ () => parallax.scrollTo(i + 1) } key={ i }
					                                        color="inherit">{ title }</Button>
					) }
					<Button color={"inherit"} href={"/api"}>API</Button>
					{/*{ dropDownLinks.map(({ title, path }, i) =>*/ }
					{/*	<Link key={ i } color="inherit" href={ path }>{ title }</Link>) }*/ }

				</Toolbar>
			</AppBar>
		</div>
	);
};
