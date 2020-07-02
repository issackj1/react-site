import React, { useEffect, useState } from 'react';
import '../App.css';
import { ApiLogin } from "./ApiLogin";
import { ApiHome } from "./ApiHome";

const axios = require('axios');

interface Props {

}

export const Api: React.FC<Props> = () => {

    const [isAuthenticated, setAuthentication] = useState(false);

    useEffect(() => {
        authenticate();
    })

    const authenticate = () => {
        axios.post('http://3.94.8.68:4000/api/confirm-token/')
            .then((result: any) => {
                    setAuthentication(true)
                },
                (error: any) => {
                    console.log('you need to log in bro')
                }
            );
    }

    return (
        <div className={"container d-flex text-center justify-content-center flex-column h-100 m-auto"}>
            {
                isAuthenticated
                    ? <ApiHome/>
                    : <ApiLogin/>
            }
        </div>
    );
};
