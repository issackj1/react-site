import React from 'react';
import {NavBar} from "./NavBar";

interface Props {

}

export const AstroJump: React.FC<Props> = () => {
    return (<div className="App">
        <NavBar/>
        <h1>Astro Jump</h1>
    </div>)
};
