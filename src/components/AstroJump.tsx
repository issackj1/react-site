import React from 'react';
import NarBar from "./NavBar";

interface Props {

}

export const AstroJump: React.FC<Props> = () => {
    return (<div className="App">
        <NarBar/>
        <h1>Astro Jump</h1>
    </div>)
};
