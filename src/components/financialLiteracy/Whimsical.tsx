// @ts-nocheck
import React from 'react';
import { Box, Container, Grid, Typography } from "@material-ui/core";
import Iframe from "react-iframe";

interface Props {
}

export const Whimsical: React.FC<Props> = (props) => {

	return (
		<Container maxWidth="lg">
			<Box my={ 4 }>
				<Typography color={ "textPrimary" } component={ "h5" } variant={ "h2" } align={ "center" }>Welcome to Financial Literacy</Typography>
				<Grid container
				direction={"row"}>
					<Iframe url="https://whimsical.com/embed/337yB3814c7Fs1JVmmqQGU"
					        width="1600px"
					        height="700px"
					        id="myId"
					        className="myClassname"
					        display="initial"
					        position="relative"/>
				</Grid>
			</Box>
		</Container>)
};
