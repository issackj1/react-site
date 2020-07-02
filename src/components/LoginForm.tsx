import React from 'react';
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import { Button } from "@material-ui/core";

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
                    props.handleSubmit(values.email, values.password);
                    setSubmitting(false);
                }, 400);
            }}>
            {({ isSubmitting }) => (
                <Form className={"d-flex flex-column"}>
                    <Field className={"mb-3"} component={TextField} name="email" label={"email"} variant="outlined"
                           InputProps={{ notched: true }}/>
                    <Field className={"mb-3"} component={TextField} name="password" label={"password"}
                           variant="outlined" InputProps={{ notched: true }}/>
                    <Field component={CheckboxWithLabel} name="checked"
                           Label={{ label: 'Agree to terms and conditions' }}/>;
                    <Button type={"submit"} variant="contained" disabled={isSubmitting} color="primary">Submit</Button>
                </Form>
            )}
        </Formik>
    );
};
