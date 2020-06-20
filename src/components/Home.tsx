import React from 'react';
import {NavBar} from "./NavBar";
import logo from "../logo.svg";
import {Content} from "./Content";
import {useSpring, animated} from 'react-spring';

interface Props {
    dropDownLinks: link[],
    navLinks: link[]
}

interface link  {
    title: string,
    path: string
}

interface useSpringProps {
    opacity: number;
    scroll: number;
    from: {
        opacity: number;
        scroll: number;
    };
}

export const Home: React.FC<Props> = (props) => {

    const springProps = useSpring<useSpringProps>({
        opacity: 1,
        scroll: 100,
        from: {
            opacity: 0,
            scroll: 0
        }
    });

    // @ts-ignore
    return (<animated.div scrollTop={springProps.scroll} className="App" style={springProps}>
        <NavBar  {...props} />
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
