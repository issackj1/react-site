// @ts-nocheck
import React from 'react';
import { useParams } from "react-router-dom";
import { GetCubeMetaData } from "../forms/GetCubeMetaData";
import { GetAllCubes } from "../forms/GetAllCubes";
import { Box, Container, Grid, Typography } from "@material-ui/core";


interface Props {
}


export const Endpoint: React.FC<Props> = (props) => {

	const { name } = useParams();

	const getProps = (name: string) => {

		let form, title;
		switch ( name ) {
			case  "seeAll":
				title = 'See All Tables';
				form = <GetAllCubes/>;
				break;
			case "searchAll":
				title = 'Search All Tables';
				form =
					<GetCubeMetaData/>;
				break;
			default:
				title = 'three';
				form = <GetCubeMetaData/>;
		}
		return {
			title: title,
			form: form,
		};
	}

	const { title, form } = getProps(name);

	return (
		<Container maxWidth="sm">
			<Box my={ 20 }>
				<Grid direction={"row"}>
					<Grid item xs={12} sm={12}>
						<Typography align={"center"}>
							{ title }
						</Typography>
					</Grid>
					<Grid item xs={12} sm={12}>
						<Typography align={"center"}>
							{ form }
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}
