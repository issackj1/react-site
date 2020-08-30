// @ts-nocheck
import React from 'react';
import { AppBar, Grid, Link, Toolbar, Typography, } from "@material-ui/core";
import { Parallax } from "react-spring/renderprops-addons";
import { navProps } from "../constants";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';


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
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const classes = useStyles();

	const handleMenu = (event: { currentTarget: React.SetStateAction<null>; }) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={ classes.root }>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" className={ classes.menuButton } color="inherit" aria-label="menu">
						<MenuIcon/>
					</IconButton>
					<Typography variant="h6" className={ classes.title }>
						Issack John
					</Typography>
					<Typography className={classes.root}>
						{ navLinks.map(({ title }, i) => <Link key={ i }
						                                                                               onClick={ () => parallax.scrollTo(i + 1) }>{ title }</Link>
						) }
					</Typography>
					{/*{ dropDownLinks.map(({ title, path }, i) =>*/ }
					{/*	<Link key={ i } color="inherit" href={ path }>{ title }</Link>) }*/ }
					<Link href={ "/api" }>API</Link>
				</Toolbar>
			</AppBar>
		</div>
	);
};
