// @ts-nocheck
import React from 'react';
import { AppBar, Button, Fab, Link, Toolbar, Typography, Zoom, } from "@material-ui/core";
import { Parallax } from "react-spring/renderprops-addons";
import { navProps } from "../constants";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

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
	zoom: {
		position: 'fixed',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	}
}));

const logo = require('../logo.jpg');

function ScrollTop() {
	const classes = useStyles();

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
			'#back-to-top-anchor',
		);

		if (anchor) {
			anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};

	return (
		<Zoom>
			<div onClick={handleClick} role="presentation" className={classes.zoom}>
				hi
			</div>
		</Zoom>
	);
}

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
					                                        color="inherit" variant={"text"}>{ title }</Button>
					) }
					<Button color={"inherit"} href={"/api"} variant={"text"}>API</Button>
				</Toolbar>
				<ScrollTop>
					<Fab color="secondary" size="small" aria-label="scroll back to top">
						<KeyboardArrowUpIcon />
					</Fab>
				</ScrollTop>
			</AppBar>

		</div>
	);
};
