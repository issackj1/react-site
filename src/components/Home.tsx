import React from 'react';
import {NavBar} from "./NavBar";
import logo from "../logo.svg";
import {Content} from "./Content";
import {useSpring, animated} from 'react-spring';
import {Parallax, ParallaxLayer} from "react-spring/renderprops-addons";
import {About} from "./About";
import {Skills} from "./Skills";
import {Education} from "./Education";
import {Experience} from "./Experience";
import {Extracurricular} from "./Extracurricular";
import {Contact} from "./Contact";

interface Props {
    dropDownLinks: link[],
    navLinks: link[]
}

interface link {
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
    let parallax;
    // @ts-ignore
    return (<div className="App">
        <NavBar  {...props} />
        <Parallax pages={7} scrolling={true} ref={ref => (parallax = ref)}>
            <ParallaxLayer offset={0} speed={0.5}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <animated.p style={springProps}>Issack John</animated.p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learning React
                    </a>
                </header>
            </ParallaxLayer>
            <Content/>
        </Parallax>
    </div>)
};
