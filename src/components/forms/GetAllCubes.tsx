// @ts-nocheck
import React, { useState } from 'react';
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { TextField } from "formik-material-ui";
import { Button } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";

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
	const [isLoading, setIsLoading] = useState(false);


	const handleSubmit = async (id: string) => {
		setIsLoading(true);
		await axios.post('http://localhost:4000/api/v1/getCubeMetaData/' + id)
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
		<>
			<Row>
				<Col>
					{ response }
				</Col>
			</Row>
			<Formik
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
		</>
	);
};
