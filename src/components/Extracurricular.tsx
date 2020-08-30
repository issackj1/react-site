import React from 'react';
import { ExtracurricularContent } from "../constants";
import { Grid, Typography } from "@material-ui/core";

interface Props {

}

export const Extracurricular: React.FC<Props> = () => {
	return (
		<div className={ "container" } id={ "extracurricular" }>
			<Grid
				container
				direction={ "row" }
				spacing={1}
			>
				<Grid
					item
					xs={ 12 }
					sm={ 12 }
				>
					<Typography variant={ "h2" } gutterBottom align={"center"}>{ ExtracurricularContent.title }</Typography>
				</Grid>
				<Grid
					item
					xs={ 12 }
					sm={ 6 }
					alignItems={"center"}
				>
					<Typography variant={ "h4" } gutterBottom align={"center"}>Hackathons Attended</Typography>
					<Typography align={"center"}>
						<ul className={ "list-unstyled" }>
							<a href="https://devpost.com/software/starterhacks2020-klj3qb" rel={ "noopener noreferrer" }
							   target={ "_blank" }>
								<li>StarterHacks 2020</li>
							</a>
							<a href="https://devpost.com/software/black-tech-initiative-4fghix"
							   rel={ "noopener noreferrer" }
							   target={ "_blank" }>
								<li>NSBE Hacks 2020</li>
							</a>
						</ul>
					</Typography>
				</Grid>
				<Grid
					item
					xs={ 12 }
					sm={ 6 }
				>
					<Typography variant={ "h4" } gutterBottom align={"center"}>Favourite Books</Typography>
					<Typography align={"center"}>
						<ul className={ "list-unstyled" }>
							{
								ExtracurricularContent.books.map((book, i) => <li key={ i }>{ book.name }</li>)
							}
						</ul>
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
};
