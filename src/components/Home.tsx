import React from 'react';
import {NavBar} from "./NavBar";
import logo from "../logo.svg";
import {Content} from "./Content";
import {useSpring, animated} from 'react-spring';

interface Props {
    opacity: number;
    from: {
        opacity: number
    };
}

export const Home: React.FC<Props> = () => {

    const props = useSpring({opacity: 1, from: {opacity: 0}});

    return (<animated.div className="App" style={props}>
        <NavBar/>
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
    </animated.div>)
};
