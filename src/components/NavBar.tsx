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
	toolbar: {
		flexWrap: 'wrap'
	},
	toolbarSecondary: {
		justifyContent: "space-between",
		overflowX: "auto"
	},
	toolbarLink: {
		padding: theme.spacing(1),
		flexShrink: 0,
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

	const { navLinks } = navProps;
	const classes = useStyles();

	return (
		<div className={ classes.root }>
			<AppBar position="static">
				<Toolbar variant={"dense"} className={classes.toolbar}>
					<Typography variant="h6" className={ classes.title }>
						<Link underline={ "none" } color={ "inherit" } href={ "/" }>
							Issack John
						</Link>
					</Typography>
				</Toolbar>
				<Toolbar className={classes.toolbarSecondary}>
					{ navLinks.map(({ title }, i) => <Link noWrap
					                                       className={classes.toolbarLink}
					                                       onClick={ () => parallax.scrollTo(i + 1) }
					                                       key={ i }
					                                       color="inherit" variant={"text"}>{ title }</Link>
					) }
					<Link noWrap className={classes.toolbarLink} color={"inherit"} href={"/financialLiteracy"} variant={"text"}>Financial Literacy</Link>
					<Link nowrap className={classes.toolbarLink} color={"inherit"} href={"/athena"} variant={"text"}>Athena</Link>
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
