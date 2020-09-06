import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Link, Toolbar, Typography } from "@material-ui/core";

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
