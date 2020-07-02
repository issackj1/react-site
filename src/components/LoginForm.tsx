import React from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import * as Yup from 'yup';

interface Props {
    handleSubmit: (username: string, password: string) => any
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

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={schema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2));
                    props.handleSubmit(values.email, values.password);
                    setSubmitting(false);
                }, 400);
            }}>
            {({ isSubmitting }) => (
                <Form className={"d-flex flex-column justify-content-between"}>
                    <Field type="email" name="email" as={"input"} placeholder={"Email"}/>
                    <ErrorMessage name="email" component="div"/>
                    <br/>
                    <Field type="password" name="password" as={"input"} placeholder={"password"}/>
                    <ErrorMessage name="password" component="div"/>
                    <Button type="submit" disabled={isSubmitting}>
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    );
};
