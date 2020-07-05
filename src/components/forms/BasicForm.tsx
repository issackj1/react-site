// @ts-nocheck
import React from 'react';
import { Field, Form, Formik } from "formik";
import { Col } from "react-bootstrap";
import * as Yup from 'yup';
import { Select, TextField } from "formik-material-ui";
import { Button, FormControl, InputLabel, MenuItem } from "@material-ui/core";

interface Props {

}

const schema = Yup.object({
    productId: Yup.number().required('Id must be 8 digits long')
});

export const BasicForm: React.FC<Props> = (props) => {

    const { handleSubmit } = props;

    const getApiOptions = () => {
        return (
            <FormControl className={"mr-1"}>
                <InputLabel htmlFor="endpoint">Endpoint</InputLabel>
                <Field
                    component={Select}
                    name="Endpoint"
                    inputProps={{
                        url: 'Endpoint',
                    }}
                >
                    <MenuItem value={'getCubeMetaData'}>getCubeMetaData</MenuItem>
                    <MenuItem
                        value={'getDataFromVectorsAndLatestNPeriods'}>getDataFromVectorsAndLatestNPeriods</MenuItem>
                    <MenuItem
                        value={'getDataFromCubePidCoordAndLatestNPeriods'}>getDataFromCubePidCoordAndLatestNPeriods</MenuItem>
                    <MenuItem value={'getChangedSeriesDataFromVector'}>getChangedSeriesDataFromVector</MenuItem>
                </Field>
            </FormControl>
        )
    }

    return (
        <Col>
            <Formik
                initialValues={{ productId: '' }}
                validationSchema={schema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2));
                        handleSubmit(values.productId);
                        setSubmitting(false);
                    }, 400);
                }}>
                {({ isSubmitting }) => (
                    <Form>
                        {getApiOptions()}
                        <Field component={TextField} name="productId" label={"Product Id"} variant="standard"
                               InputProps={{ notched: true }}/>
                        <Button className={"mt-2 ml-1"} variant="contained" type="submit" color={"primary"}
                                disabled={isSubmitting}>
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </Col>
    );
};
