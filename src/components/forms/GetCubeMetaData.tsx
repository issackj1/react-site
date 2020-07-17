// @ts-nocheck
import React, { useState } from 'react';
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { TextField } from "formik-material-ui";
import { Button } from "@material-ui/core";
import { Card, Col, Row, Toast } from "react-bootstrap";

interface Props {
}

const axios = require('axios');

const schema = Yup.object({
	productId: Yup.number().required('Id must be 8 digits long')
});

export const GetCubeMetaData: React.FC<Props> = () => {

	const [response, setResponse] = useState({});
	const [toastMessage, setToastMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [show, setShow] = useState(false);

	const handleSubmit = async (id: string) => {
		if (response.productId === id) {
			setToastMessage('Item already exists');
			setShow(true);
			return
		}
		setIsLoading(true);
		await axios.post('http://localhost:4000/api/v1/getCubeMetaData/' + id)
			.then((result: any) => {
					if (result.data.status === 'FAILED') {
						setResponse(result.data.object.split('.')[0]);
					} else {
						setResponse(result.data.object)
					}
				},
				(error: { message: any; }) => {
					setToastMessage(error.message);
					setShow(true)
				}
			);
		setIsLoading(false);
	};

	const isEmpty = (obj) => {
		for (var prop in obj) {
			if (obj.hasOwnProperty(prop))
				return false;
		}
		return true;
	}

	return (
		<>
			<Row>
				<Col className={ "d-flex justify-content-center" }>
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
								<Field component={ TextField } name="productId" label={ "Product Id" }
								       variant="standard"
								       InputProps={ { notched: true } }/>
								<Button className={ "mt-2 ml-1" } variant="contained" type="submit" color={ "primary" }
								        disabled={ isSubmitting }>
									Submit
								</Button>
							</Form>
						) }
					</Formik>
				</Col>
			</Row>
			<Row>
				<Col className={ "d-flex justify-content-center mb-3" } style={ { height: '50px' } }>
					{
						toastMessage
							? (
								<Toast className={ "mx-auto" } onClose={ () => setShow(false) } show={ show }
								       delay={ 3000 }
								       autohide>
									<Toast.Body>
										<strong>{ toastMessage }</strong>
									</Toast.Body>
								</Toast>
							)
							: null
					}
				</Col>
			</Row>
			<Row>
				<Col className={ "d-flex justify-content-center" }>
					{
						!isLoading && !isEmpty(response)
							? (
								<Card>
									<Card.Header>{ response.cubeTitleEn }</Card.Header>
									<Card.Body>
										<Card.Title>Product ID: { response.productId }</Card.Title>
										<Card.Text>Status: { response.archiveStatusEn }</Card.Text>
									</Card.Body>
									<Card.Footer>
										<small>Released: { response.releaseTime }</small>
									</Card.Footer>
								</Card>
							)
							: null
					}
				</Col>
			</Row>
		</>
	);
};
