// @ts-nocheck
import React from 'react';
import '../App.css';
import { BasicForm } from "./BasicForm";


interface Props {

}

export const ApiHome: React.FC<Props> = () => {

    return (
        <div className={"container d-flex text-center"}>
            <p>Retrieve the metadata supporting the data at table level</p>
            <BasicForm/>
        </div>
    );
};
