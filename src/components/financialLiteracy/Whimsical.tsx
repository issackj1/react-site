// @ts-nocheck
import React from 'react';
import { Box, Container, Grid, Typography } from "@material-ui/core";
import Iframe from "react-iframe";
import { AffiliateLinks } from "../../constants";

interface Props {
}

export const Whimsical: React.FC<Props> = (props) => {

	const { FintechApps, Newsletters } = AffiliateLinks;
	return (
		<Container maxWidth="lg">
			<Box my={ 2 }>
				<Typography color={ "textPrimary" } variant={ "h3" } align={ "center" }>Financial Literacy</Typography>
				<Grid container
				      direction={ "row" }
				      spacing={ 2 }>
					<Grid container item direction={ "column" } xs={ 6 }>
						<Typography color={ "textPrimary" } variant={ "h6" }>Fintech Apps</Typography>
						<ul className={ "list-unstyled" }>
							{
								FintechApps.map(({ title, link }, i) => <li key={ i }>
									<a href={ link }>{ title }</a>
								</li>)
							}
						</ul>
					</Grid>
					<Grid container item direction={ "column" } xs={ 6 }>
						<Typography color={ "textPrimary" } variant={ "h6" }>Newsletters</Typography>
						<ul className={ "list-unstyled" }>
							{
								Newsletters.map(({ title, link }, i) => <li key={ i }>
									<a href={ link }>{ title }</a>
								</li>)
							}
						</ul>
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
