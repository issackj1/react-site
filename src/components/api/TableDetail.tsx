// @ts-nocheck
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Container, Fade } from "@material-ui/core";
import _ from 'lodash';

type Props = {};

const axios = require('axios');

export const TableDetail: React.FC<Props> = (props: Props) => {

	const { name, productId } = useParams();
	const [isLoading, setIsLoading] = useState(false);
	const [response, setResponse] = useState({});

	const fetchTable = async () => {
		setIsLoading(true)
		await axios.post('http://localhost:4000/api/v1/getCubeMetaData/' + productId)
			.then((result: any) => {
					if (result.data.status === 'FAILED') {
						setResponse(result.data.object.split('.')[0]);
					} else {
						setResponse(result.data.object);
					}
				},
				(error: any) => {
				});
		setIsLoading(false);
	}

	useEffect(() => {
		fetchTable()
	}, [])

	const details = (response) => {
		console.log(response)
		return (
			<>
				<p>{ response.cubeTitleEn }</p>
				<p>{ response.productId }</p>
				<p>{ response.archiveStatusEn }</p>
				<p>{ `From: ${ response.cubeStartDate } to ${ response.cubeEndDate }` }</p>
				<p>Released: { response.releaseTime }</p>
			</>
		)
	}

	return (
		<Container maxWidth="sm">
			<Box my={ 20 }>
				{
					isLoading
						? (
							<div>
								<Fade in={ isLoading } style={ { transitionDelay: isLoading ? '800ms' : '0ms', } }
								      unmountOnExit>
									<CircularProgress/>
								</Fade>
							</div>
						)
						: (
							!_.isEmpty(response)
								? details(response)
								: <h1>Something went wrong...</h1>
						)
				}
			</Box>
		</Container>
	);
};