import React from 'react';
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';
import { Button, CssBaseline, Link } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";

interface Props {
	handleSubmit: (username: string, password: string) => any
	toggleSignUp: () => any
}

const schema = Yup.object({
	email: Yup.string()
		.email()
		.required('Please enter a valid email'),
	password: Yup.string()
		.min(8)
		.max(16)
		.required('Please enter a password')
});

export const LoginForm: React.FC<Props> = (props) => {

	const { handleSubmit, toggleSignUp } = props;

	return (
		<Formik
			initialValues={ { email: '', password: '' } }
			validationSchema={ schema }
			onSubmit={ (values, { setSubmitting }) => {
				setTimeout(() => {
					handleSubmit(values.email, values.password);
					setSubmitting(false);
				}, 400);
			} }>
			{ ({ isSubmitting }) => (
				<Form className={ "d-flex flex-column" }>
					<CssBaseline/>
					<Field className={ "mb-3" } component={ TextField } name="email" label={ "Email Address *" }
					       variant="outlined"/>
					<Field className={ "mb-3" } component={ TextField } type={ "password" } name="password"
					       label={ "Password *" }
					       variant="outlined"/>
					<Button type={ "submit" } variant="contained" disabled={ isSubmitting } color="primary">Sign
						In</Button>
					<Row>
						<Col>
							<Link component={ "button" } onClick={ toggleSignUp }>
								Forgot password?
							</Link>
						</Col>
						<Col>
							<Link component={ "button" } onClick={ toggleSignUp }>
								Don't have an account? Sign Up
							</Link>
						</Col>
					</Row>
				</Form>
			) }
		</Formik>
	);
};
