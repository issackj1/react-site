import React from 'react';
import {NavBar} from "./NavBar";

interface Props {

}

export const Shuffl: React.FC<Props> = () => {
    return (<div className="App">
        <NavBar/>
        <h1>Shuffl</h1>
    </div>)
};
