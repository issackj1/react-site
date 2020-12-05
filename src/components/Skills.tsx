import { Grid, Typography } from "@material-ui/core";
import React from 'react';
import { SkillsContent } from "../constants";

interface Props {

}


export const Skills: React.FC<Props> = () => {
	return (
		<Grid
			container
			direction="row"
			spacing={ 2 }
			justify="center">
			<Grid
				item
				xs={ 12 }
				sm={ 12 }
			>
				<Typography variant={ "h2" } align={ "center" } gutterBottom>{ SkillsContent.title }</Typography>
			</Grid>
			<Grid
				item
				xs={ 12 }
				sm={ 12 }
			>
				<Typography variant={ "h5" } align={ "center" } gutterBottom>{ SkillsContent.subtitle }</Typography>
			</Grid>
			<Grid item xs={ 12 } sm={ 3 }>
				<Typography variant={ "h4" }>Languages</Typography>
				<ul className={ "list-unstyled" }>
					{
						SkillsContent.languages.map((language:String, i:number) => <li key={ i }>{ language }</li>)
					}
				</ul>
			</Grid>
			<Grid item xs={ 12 } sm={ 3 }>
				<Typography variant={ "h4" }>Libraries</Typography>
				<ul className={ "list-unstyled" }>
					{
						SkillsContent.libraries.map((library:String, i:number) => <li key={ i }>{ library }</li>)
					}
				</ul>
			</Grid>
			<Grid item xs={ 12 } sm={ 3 }>
				<Typography variant={ "h4" }>Frameworks</Typography>
				<ul className={ "list-unstyled" }>
					{
						SkillsContent.frameworks.map((framework:String, i:number) => <li key={ i }>{ framework }</li>)
					}
				</ul>
			</Grid>
			<Grid item xs={ 12 } sm={ 3 }>
				<Typography variant={ "h4" }>Databases</Typography>
				<ul className={ "list-unstyled" }>
					{
						SkillsContent.databases.map((database:String, i:number) => <li key={ i }>{ database }</li>)
					}
				</ul>
			</Grid>
		</Grid>
	);
};
