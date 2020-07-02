import React, { useEffect, useState } from 'react';
import '../App.css';
import { ApiLogin } from "./ApiLogin";
import { ApiHome } from "./ApiHome";

const axios = require('axios');

interface Props {

}

export const Api: React.FC<Props> = () => {

    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        authenticate();
    }, [])

    const authenticate = () => {
        axios.post('/api/confirm-token/')
            .then((result: any) => {
                    setAuthenticated(true)
                },
                (error: any) => {
                    console.log('you need to log in bro')
                }
            );
    }

    return (
        <div className={"container d-flex text-center justify-content-center flex-column h-100 m-auto"}>
            {
                authenticated
                    ? <ApiHome/>
                    : <ApiLogin
                        setAuthenticated={() => setAuthenticated(true)}
                    />
            }
        </div>
    );
};
