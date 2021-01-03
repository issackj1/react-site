import React from 'react';
import { ExtracurricularContent } from "../../constants";
import { Grid, Typography } from "@material-ui/core";
import {ExtracurricularItem} from "./ExtracurricularItem";

interface Props {

}

interface Book {
	name : String
	author: String
}

export const Extracurricular: React.FC<Props> = () => {
	return (
		<div className={ "container" } id={ "extracurricular" }>
			<Grid container direction={ "row" } spacing={ 1 }>
				<Grid item xs={ 12 } sm={ 12 }>
					<Typography variant={ "h2" } gutterBottom
					            align={ "center" }>{ ExtracurricularContent.title }</Typography>
				</Grid>
				<ExtracurricularItem title={"Hackathons Attended"} items={ExtracurricularContent.hackathons}/>
				<ExtracurricularItem title={"Favourite Books"} items={ExtracurricularContent.books}/>
			</Grid>
		</div>
	);
};
