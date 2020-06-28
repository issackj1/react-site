// @ts-nocheck
import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import * as Yup from 'yup'; // for everything
interface Props {

}

const axios = require('axios');

const schema = Yup.object({
    productId: Yup.number().required('Id must be 8 digits long')
});

export const BasicForm: React.FC<Props> = () => {

    const [response, setResponse] = useState('');

    const handleSubmit = (id) => {
        axios.get('http://localhost:4000/api/v1/getCubeMetaData/' + id)
            .then(
                (result) => {
                    setResponse(result.data.object.split('.')[0]);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error: { data: { message: any; }; }) => {
                    setResponse(error.data.message);
                }
            );
    };

    return (
        <div>
            <Formik
                initialValues={{ productId: 12345678 }}
                validationSchema={schema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2));
                        handleSubmit(values.productId);
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="productId" placeholder={"Product Id"}/>
                        <ErrorMessage name="text" component="div"/>
                        <Button type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
            <p>{response}</p>
        </div>
    );
};
