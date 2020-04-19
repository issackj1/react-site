import React from 'react';
import NarBar from "./NavBar";
import logo from "../logo.svg";
import Content from "./Content";

interface Props {

}

export const Home: React.FC<Props> = () => {
    return (<div className="App">
        <NarBar/>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                Issack John
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learning React
            </a>
        </header>
        <Content/>
    </div>)
};
