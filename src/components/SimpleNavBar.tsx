import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Link, Toolbar, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

interface Props {
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

export const SimpleNavBar: React.FC<Props> = () => {
	const classes = useStyles();

	return (
		<div className={ classes.root }>
			<AppBar position={ "static" }>
				<Toolbar>
					<IconButton edge="start" className={ classes.menuButton } color="inherit" aria-label="menu">
						<MenuIcon/>
					</IconButton>
					<Typography variant="h6" className={ classes.title }>
						<Link underline={"none"} color={"inherit"} href={"/"}>
							Issack John
						</Link>
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};


const logo = require('../logo.jpg');
