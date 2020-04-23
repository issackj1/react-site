import React, { useState, useEffect } from 'react';
import {NavBar} from "./NavBar";
import logo from "../logo.svg";
import {Content} from "./Content";
import {useSpring, animated } from 'react-spring';
import {Carousel} from "./Carousel";

interface Props {

}

interface useSpringProps {
    opacity: number;
    scroll: number;
    from: {
        opacity: number;
        scroll: number;
    };
}

export const Home: React.FC<Props> = () => {

    const props = useSpring<useSpringProps>({
        opacity: 1,
        scroll: 100,
        from: {
            opacity: 0,
            scroll: 0
        }
    });

    return (<animated.div scrollTop={props.scroll} className="App" style={props}>
        <NavBar/>
        <Carousel/>
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
