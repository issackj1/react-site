import React from 'react';
import {NavBar} from "./NavBar";
import logo from "../logo.svg";
import {Content} from "./Content";
import {useSpring, animated } from 'react-spring';

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

    const navProps = {
        dropDownLinks: [
            {title: 'Starter Hacks 2020', path: '/project/starterhacks2020'},
            {title: 'NSBE Hacks 2020', path: '/project/nsbehacks2020'},
            {title: 'Shuffl', path: '/project/shuffl'},
            {title: 'Astro Jump', path: '/project/astrojump'},
        ],
        navLinks: [
            {title: 'Skills', path: '#skills'},
            {title: 'Education', path: '#education'},
            {title: 'Experience', path: '#experience'},
            {title: 'Extracurricular', path: '#extracurricular'},
        ]
    };

    // @ts-ignore
    return (<animated.div scrollTop={props.scroll} className="App" style={props}>
        <NavBar  {...navProps} />
        {/*<Carousel/>*/}
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
