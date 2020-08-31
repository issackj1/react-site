// @ts-nocheck
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Button, Grid, SvgIcon } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";

export const PrivateRoute = ({ component: Component, handleLogout, ...rest }) => (
	<Route { ...rest } render={ props => {

		if (!localStorage.getItem('my-jwt')) {
			// not logged in so redirect to login page with the return url
			return <Redirect to={ { pathname: '/api/auth', state: { from: props.location } } }/>
		}

		// authorised so return component
		return (
			<>
				<Grid
					container
					direction={"row"}
					justify={"flex-end"}
				>
					<Button variant="contained" color="primary"
					        startIcon={ <SvgIcon component={ ExitToApp }/> } onClick={ handleLogout }>
						Logout
					</Button>
				</Grid>
				<Component { ...props } />
			</>)
	} }/>


)
