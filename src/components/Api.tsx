import React from 'react';
import '../App.css';
import { ApiLogin } from "./ApiLogin";
import { ApiHome } from "./ApiHome";

interface Props {

}

export const Api: React.FC<Props> = () => {

    const loggedIn = false;

    return (
        <div className={"container d-flex text-center justify-content-center flex-column h-100 m-auto"}>
            {
                loggedIn
                    ? <ApiHome/>
                    : <ApiLogin/>
            }
        </div>
    );
};
