import React, { useState } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Button, CircularProgress, Fade, Grid, SvgIcon } from "@material-ui/core";
import { Auth } from "./Auth";
import { PrivateRoute } from "./PrivateRoute";
import { Endpoint } from "./Endpoint";
import { SimpleNavBar } from "../SimpleNavBar";
import { NavigateBefore } from "@material-ui/icons";
import { TableDetail } from "./TableDetail";

interface Props {
	copyright: () => () => JSX.Element
}

export const Athena: React.FC<Props> = (props) => {

	const { copyright } = props;
	const [isLoading, setIsLoading] = useState(false);
	const history = useHistory();

	const goBack = () => {
		history.goBack()
	}

	const handleLogout = () => {
		setIsLoading(true)
		localStorage.removeItem('my-jwt');
		history.push("/athena");
		setIsLoading(false)
	}

	const noBackButton = ["/athena", "/athena/auth"]

	return (
		<Grid
			direction={ "row" }>
			<Grid item xs={ 12 } sm={ 12 }>
				<SimpleNavBar/>
			</Grid>
			<Grid item xs={ 12 } sm={ 12 } justify={ "flex-start" }>
				{
					noBackButton.indexOf(history.location.pathname) === -1
						? (
							<Button variant="contained" color="primary"
							        startIcon={ <SvgIcon component={ NavigateBefore }/> } onClick={ goBack }>
								Back
							</Button>
						)
						: null
				}
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
								<Route path={ "/athena/auth" } component={ Auth } copyright={ copyright }/>
								<PrivateRoute handleLogout={ () => handleLogout() }
								              path={ "/athena/:name/detail/:productId" } component={ TableDetail }/>
								<PrivateRoute handleLogout={ () => handleLogout() } path={ "/athena/:name" }
								              component={ Endpoint }/>
								<PrivateRoute handleLogout={ () => handleLogout() } path={ "/" } component={ Welcome }/>
							</Switch>
						)
				}
			</Grid>
		</Grid>
	);
};
