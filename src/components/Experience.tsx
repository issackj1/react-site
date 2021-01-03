import React from 'react';
import { Grid, Typography } from "@material-ui/core";

interface Props {

}

export const Experience: React.FC<Props> = () => {
	return (
		<Grid container direction={ "row" } justify={ "center" }>
			<Grid item xs={ 12 } sm={ 12 }>
				<Typography variant={ "h2" } align={ "center" }>
					WORK EXPERIENCE
				</Typography>
			</Grid>
			<Grid item xs={ 12 } sm={ 12 }>
				<Typography variant={ "h5" } align={ "center" }>
					Work Experience
				</Typography>
			</Grid>
			<Grid item xs={ 12 } sm={ 12 }>
				<Typography variant={ "body1" } align={ "center" }>
					DevOps Engineer Co-op (PLATO Accelerator Core) at The Bank of Nova Scotia May 2020 - Aug 2020
				</Typography>
				<Typography variant={ "body1" } align={ "center" }>
					Software Engineer Co-op at The Bank of Nova Scotia Jan 2020 - May 2020
				</Typography>
				<Typography variant={ "body1" } align={ "center" }>
					Software Engineer Co-op at The Bank of Nova Scotia Sep 2019 - Dec 2019
				</Typography>
			</Grid>
		</Grid>
	);
};
