import React from 'react';
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import { Button, Link } from "@material-ui/core";
import { Col } from "react-bootstrap";

interface Props {
    handleSubmit: (username: string, email: string, password: string) => any
    toggleSignUp: () => any
}

const schema = Yup.object({
    username: Yup.string()
        .required('Please enter a username'),
    email: Yup.string()
        .email()
        .required('Please enter a valid email'),
    password: Yup.string()
        .min(8)
        .max(16)
        .required('Please enter a password')
});

export const SignUpForm: React.FC<Props> = (props) => {

    const { handleSubmit, toggleSignUp } = props;

    return (
        <Formik
            initialValues={{ username: '', email: '', password: '' }}
            validationSchema={schema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    handleSubmit(values.username, values.email, values.password);
                    setSubmitting(false);
                }, 400);
            }}>
            {({ isSubmitting }) => (
                <Form className={"d-flex flex-column"}>
                    <Field className={"mb-3"} component={TextField} name="username" label={"Username"}
                           variant="outlined"
                           InputProps={{ notched: true }}/>
                    <Field className={"mb-3"} component={TextField} name="email" label={"email"} variant="outlined"
                           InputProps={{ notched: true }}/>
                    <Field className={"mb-3"} component={TextField} name="password" label={"password"}
                           variant="outlined" InputProps={{ notched: true }}/>
                    <Field component={CheckboxWithLabel} name="checked" type={"checkbox"}
                           Label={{ label: 'Agree to terms and conditions' }}/>
                    <Button type={"submit"} variant="contained" disabled={isSubmitting}
                            color="primary">Register</Button>
                    <Col>
                        <Link component={"button"} onClick={toggleSignUp}>
                            Already have an account? Log In
                        </Link>
                    </Col>
                </Form>
            )}
        </Formik>
    );
};
