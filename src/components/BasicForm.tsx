// @ts-nocheck
import React from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, Col } from "react-bootstrap";
import * as Yup from 'yup';

interface Props {

}

const schema = Yup.object({
    productId: Yup.number().required('Id must be 8 digits long')
});

export const BasicForm: React.FC<Props> = (props) => {

    return (
        <Col>
            <Formik
                initialValues={{ productId: 10100004 }}
                validationSchema={schema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2));
                        props.handleSubmit(values.productId);
                        setSubmitting(false);
                    }, 400);
                }}>
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
        </Col>
    );
};
