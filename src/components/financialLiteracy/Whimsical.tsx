// @ts-nocheck
import React from 'react';
import {
	Box,
	Container,
	createStyles,
	Grid,
	List,
	ListItem,
	ListItemText,
	ListSubheader,
	Typography
} from "@material-ui/core";
import Iframe from "react-iframe";
import { AffiliateLinks } from "../../constants";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			maxWidth: 360,
			backgroundColor: theme.palette.background.paper
		}
	}),
);

export const Whimsical: React.FC<Props> = (props) => {

	const { FintechApps, Newsletters } = AffiliateLinks;
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);

	const handleClick = (link) => {
		window.open(link)
		setOpen(!open);
	};
	return (
		<Container maxWidth="lg">
			<Box my={ 2 }>
				<Typography color={ "textPrimary" } variant={ "h3" } align={ "center" }>Financial Literacy</Typography>
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
							{
								FintechApps.map(({ title, link }, i) => <ListItem key={ i } button href={ "#" }
								                                                  onClick={ () => handleClick(link) }>
									<ListItemText primary={ title }></ListItemText>
								</ListItem>)
							}
						</List>
					</Grid>
					<Grid container item direction={ "column" } xs={ 6 }>
						<List component={ "nav" }
						      subheader={
							      <ListSubheader component={ "div" }>
								      Newsletters
							      </ListSubheader>
						      }
						      className={ classes.root }
						>
							{
								Newsletters.map(({ title, link }, i) => <ListItem key={ i } onClick={() => handleClick(link)}>
									<ListItemText primary={ title }></ListItemText>
								</ListItem>)
							}
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
