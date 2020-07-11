import React, { useEffect, useState } from 'react';
import '../../App.css';
import { Auth } from "./Auth";
import { Home } from "./Home";
import { CircularProgress, Fade } from "@material-ui/core";

const axios = require('axios');

interface Props {

}

export const Api: React.FC<Props> = () => {

    const [authenticated, setAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const authenticate = async () => {
            setIsLoading(true)
            setIsError(false)
            await axios.post('http://localhost:4000/api/confirm-token', {},
                {
                    credentials: 'include',
                    headers: {
                        Authorization: localStorage.getItem('my-jwt')
                    }
                })
                .then((result: any) => {
                        setAuthenticated(true)
                    },
                    (error: any) => {
                        setIsError(true)
                    }
                );
            setIsLoading(false);
        }
        authenticate();
    }, [authenticated])


    return (
        <div className={"container d-flex text-center justify-content-center flex-column h-100 m-auto"}>
            {isLoading
                ? (
                    <div>
                        <Fade
                            in={isLoading}
                            style={{
                                transitionDelay: isLoading ? '800ms' : '0ms',
                            }}
                            unmountOnExit
                        >
                            <CircularProgress/>
                        </Fade>
                    </div>
                )
                : authenticated
                    ? <Home setAuthenticated={() => setAuthenticated(false)}/>
                    : <Auth setAuthenticated={() => setAuthenticated(true)}/>
            }
        </div>
    );
};
