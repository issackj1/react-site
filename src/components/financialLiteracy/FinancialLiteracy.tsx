import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import { CircularProgress, Fade, Grid } from "@material-ui/core";
import { SimpleNavBar } from "../SimpleNavBar";
import { Whimsical } from "./Whimsical";

interface Props {
}

export const FinancialLiteracy: React.FC<Props> = () => {

	const [isLoading, setIsLoading] = useState(false);

	return (
		<Grid
			direction={ "row" }>
			<Grid item xs={ 12 } sm={ 12 }>
				<SimpleNavBar/>
			</Grid>
			<Grid item xs={ 12 } sm={ 12 }>
				{
					isLoading
						? (<div>
								<Fade in={ isLoading } style={ { transitionDelay: isLoading ? '800ms' : '0ms', } }
								      unmountOnExit>
									<CircularProgress/>
								</Fade>
							</div>
						)
						: (
							<Switch>
								<Route path={ "/" } component={ Whimsical }/>
							</Switch>

						)
				}
			</Grid>
		</Grid>
	);
};
