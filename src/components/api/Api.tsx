import React, { useEffect, useState } from 'react';
import '../../App.css';
import { Auth } from "./Auth";
import { Home } from "./Home";

const axios = require('axios');

interface Props {

}

export const Api: React.FC<Props> = () => {

    const [authenticated, setAuthenticated] = useState(true);

    useEffect(() => {
        authenticate();
    }, [])

    const authenticate = () => {
        axios.post('http://localhost:4000/api/confirm-token/')
            .then((result: any) => {
                    setAuthenticated(true)
                },
                (error: any) => {
                }
            );
    }

    return (
        <div className={"container d-flex text-center justify-content-center flex-column h-100 m-auto"}>
            {
                authenticated
                    ? <Home/>
                    : <Auth
                        setAuthenticated={() => setAuthenticated(true)}
                    />
            }
        </div>
    );
};
