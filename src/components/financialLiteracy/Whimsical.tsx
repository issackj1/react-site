// @ts-nocheck
import React from 'react';
import {
	Box, Collapse,
	Container,
	createStyles,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	ListSubheader,
	Typography
} from "@material-ui/core";
import Iframe from "react-iframe";
import { AffiliateLinks } from "../../constants";
import { makeStyles } from "@material-ui/core/styles";
import { ExpandLess, ExpandMore, MonetizationOn, StarBorder } from "@material-ui/icons"
import InboxIcon from '@material-ui/icons/MoveToInbox';
;

interface Props {
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			backgroundColor: theme.palette.background.paper
		},
		nested: {
			paddingLeft: theme.spacing(4),
		},
	}),
);

function ListItemLink(props) {
	return <ListItem button component="a" { ...props } />;
}

export const Whimsical: React.FC<Props> = (props) => {

	const { FintechApps, Newsletters } = AffiliateLinks;
	const classes = useStyles();
	const [open1, setOpen1] = React.useState(true);
	const [open2, setOpen2] = React.useState(true);

	const handleClick1 = () => {
		setOpen1(!open1);
	};
	const handleClick2 = () => {
		setOpen2(!open2);
	};

	return (
		<Container maxWidth="lg">
			<Box my={ 2 }>
				<Typography color={ "textPrimary" } variant={ "h3" } align={ "center" }>Financial Literacy</Typography>
				<Typography color={ "textPrimary" } variant={ "body2" } align={ "center" }>Some of the tech that I recommend and use</Typography>
				<Grid container
				      direction={ "row" }
				      spacing={ 2 }>
					<Grid container item direction={ "column" } xs={ 6 }>
						<List component={ "nav" }
						      subheader={
							      <ListSubheader component={ "div" }>
								      FinTech Apps
							      </ListSubheader>
						      }
						      className={ classes.root }
						>
							<ListItem button onClick={handleClick1}>
								<ListItemIcon>
									<MonetizationOn />
								</ListItemIcon>
								<ListItemText primary="Trading" />
								{open1 ? <ExpandLess /> : <ExpandMore />}
							</ListItem>
							<Collapse in={open1} timeout="auto" unmountOnExit>
								<List component="div" disablePadding>
									{
										FintechApps.map(({ title, link }, i) => <ListItemLink key={ i } href={ link } className={classes.nested}>
												<ListItemText primary={ title }/>
											</ListItemLink>
										)
									}
								</List>
							</Collapse>

						</List>
					</Grid>
					<Grid container item direction={ "column" } xs={ 6 }>
						<List component={ "nav" }
						      subheader={
							      <ListSubheader component={ "div" }>
								      Others
							      </ListSubheader>
						      }
						      className={ classes.root }
						>
							<ListItem button onClick={handleClick2}>
								<ListItemIcon>
									<MonetizationOn />
								</ListItemIcon>
								<ListItemText primary="Newsletters" />
								{open2 ? <ExpandLess /> : <ExpandMore />}
							</ListItem>
							<Collapse in={open2} timeout="auto" unmountOnExit>
								<List component="div" disablePadding>
									{
										Newsletters.map(({ title, link }, i) => <ListItemLink key={ i } href={ link } className={classes.nested}>
												<ListItemText primary={ title }/>
											</ListItemLink>
										)
									}
								</List>
							</Collapse>
						</List>
					</Grid>
				</Grid>
				<Grid container
				      direction={ "row" } justify={ "center" }>
					<Iframe url="https://whimsical.com/embed/337yB3814c7Fs1JVmmqQGU"
					        width={ "1600px" }
					        height="500px"
					        id="myId"
					        className="myClassname"
					        display="initial"
					        position="relative"/>
				</Grid>
			</Box>
		</Container>)
};
