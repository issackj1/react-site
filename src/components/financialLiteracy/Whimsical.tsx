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
				<Typography color={ "textPrimary" } variant={ "h3" } align={ "center" }>Financial Literacy</Typography>
				<Grid container
				      direction={ "row" }
				spacing={2}>
					<Grid container item direction={"column"} xs={6}>
						<Typography color={ "textPrimary" } variant={ "h6" }>Fintech Apps</Typography>
						<ul className={"list-unstyled"}>
							<li><a href={"https://wealthsimple.com/invite/OBBTMW"}>Wealth Simple</a></li>
							<li><a href={"https://www.questrade.com/home"}>Questrade</a></li>
							<li><a href={"https://go.moka.ai/xk27G51pg8"}>Moka</a></li>
							<li><a href={"https://www.webull.com/"}>Webull</a></li>
						</ul>
					</Grid>
					<Grid container item direction={"column"} xs={6}>
						<Typography color={ "textPrimary" } variant={ "h6" }>Newsletters</Typography>
						<ul className={"list-unstyled"}>
							<li><a href={"http://morningbrew.com/daily/r/?kid=173fbe8e"}>MORNING BREW</a></li>
							<li><a href={"http://morningbrew.com/emerging-tech/r/?kid=173fbe8e"}>EMERGING TECH BREW</a></li>
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
