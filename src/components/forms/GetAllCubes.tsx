// @ts-nocheck
import React, { useState } from 'react';
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { TextField } from "formik-material-ui";
import { Button, Grid, Typography } from "@material-ui/core";

interface Props {

}

const axios = require('axios');

const schema = Yup.object({
	productId: Yup.number().required('Id must be 8 digits long')
});

export const GetAllCubes: React.FC<Props> = (props) => {

	const [response, setResponse] = useState([]);
	const [toastMessage, setToastMessage] = useState('');
	const [show, setShow] = useState(false);
	const [setIsLoading] = useState(false);


	const handleSubmit = async (id: string) => {
		setIsLoading(true);
		await axios.post('/api/v1/getCubeMetaData/' + id)
			.then((result: any) => {
					if (result.data.status === 'FAILED') {
						setResponse(result.data.object.split('.')[0]);
					} else {
						for (let i = 0; i < result.data.length; i++) {
							// eslint-disable-next-line @typescript-eslint/no-unused-expressions
							!response.some(e => e.object.productId === result.data.object.productId)
								? setResponse(prevState => ({ ...prevState, ...result.data[i] }))
								: [
									setToastMessage('Item already exists'),
									setShow(true)
								]
						}
					}
				},
				(error: { message: any; }) => {
					setToastMessage(error.message);
					setShow(true)
				}
			);
		setIsLoading(false);
	};

	return (
		<Grid
			container
			direction={ "column" }
			spacing={ 1 }>
			<Grid container item xs={ 12 }>
				<Typography variant={ "body1" } align={ "center" }>
					{ show ? toastMessage : null }
					{ response }
				</Typography>
			</Grid>
			<Grid container item xs={ 12 } sm={ 12 }><Formik
				initialValues={ { productId: '' } }
				validationSchema={ schema }
				onSubmit={ (values, { setSubmitting }) => {
					setTimeout(() => {
						handleSubmit(values.productId);
						setSubmitting(false);
					}, 400);
				} }>
				{ ({ isSubmitting }) => (
					<Form>
						<Field component={ TextField } name="productId" label={ "Product Id" } variant="standard"
						       InputProps={ { notched: true } }/>
						<Button className={ "mt-2 ml-1" } variant="contained" type="submit" color={ "primary" }
						        disabled={ isSubmitting }>
							Submit
						</Button>
					</Form>
				) }
			</Formik>
			</Grid>
		</Grid>
	);
};
