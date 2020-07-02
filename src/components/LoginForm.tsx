import React from 'react';
import { Form, Formik, useField } from "formik";
import { Button } from "react-bootstrap";
import * as Yup from 'yup';

interface Props {
    handleSubmit: (username: string, password: string) => any
}

interface TextFieldProps {
    label: String
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

// @ts-ignore
const MyTextField = ({ label, ...props }) => {
    // @ts-ignore
    const [field, meta, helpers] = useField(props);
    return (
        <>
            <label>
                {label}
                <input {...field} {...props} />
            </label>
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </>
    );
};


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
                <Form className={"d-flex flex-column"}>
                    <MyTextField type="email" name="email" as={"input"} placeholder={"Email"} label={"Email"}/>
                    <MyTextField type="password" name="password" as={"input"} placeholder={"Password"}
                                 label={"password"}/>
                    <Button type="submit" disabled={isSubmitting}>
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    );
};
