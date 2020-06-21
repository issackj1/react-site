// @ts-nocheck
import React from 'react';
import {NavBar} from "./NavBar";
import {useSpring, animated, config} from 'react-spring';
import {Parallax, ParallaxLayer} from "react-spring/renderprops-addons";
import {SpringConfig} from "react-spring/renderprops-universal";
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
    config: SpringConfig;
    delay: number;
    to: { opacity: number; }[];
    from: { opacity: number; };
}

export const Home: React.FC<Props> = (props) => {

    // @ts-ignore
    const springProps = useSpring<useSpringProps>({
        config: config.slow,
        delay: 300,
        to: [{opacity: 1}, {opacity: 0}],
        from: {
            opacity: 0,
        },
    });

    // @ts-ignore
    const aProps = useSpring({
        config: config.slow,
        delay: 2000,
        to: [{opacity: 1}, {opacity: 0}],
        from: {
            opacity: 0,
        }
    });

    const h1Props = useSpring({
        config: config.molasses,
        delay: 4000,
        opacity: 1,
        from: {
            opacity: 0,
        }
    });
    // const imageOne = require('../images/image_two.jpg');
    //style={{backgroundImage: `url(${imageOne})`}}

    let parallax: Parallax | null;
    return (<div className="App">
        <NavBar  {...props} />
        <Parallax pages={7} scrolling={true} ref={ref => (parallax = ref)}>
            <ParallaxLayer offset={0} speed={2} onClick={() => parallax.scrollTo(1)}>
                <header className="App-header">
                    <animated.p style={springProps}>Issack John</animated.p>
                    <animated.h1 style={h1Props}>Welcome</animated.h1>
                    <animated.a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={aProps}
                    >
                        Learning React
                    </animated.a>
                </header>
            </ParallaxLayer>
            <ParallaxLayer
                offset={1} speed={0.5} onClick={() => parallax.scrollTo(2)}
                style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <About/>
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={0.5} onClick={() => parallax.scrollTo(3)}
                           style={{
                               display: 'flex',
                               alignItems: 'center',
                               justifyContent: 'center',
                               backgroundColor: '#282c34',
                               color: 'white'
                           }}>
                <Skills/>
            </ParallaxLayer>
            <ParallaxLayer offset={3} speed={0.5} onClick={() => parallax.scrollTo(4)}
                           style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Education/>
            </ParallaxLayer>
            <ParallaxLayer offset={4} speed={0.5} onClick={() => parallax.scrollTo(5)}
                           style={{
                               display: 'flex',
                               alignItems: 'center',
                               justifyContent: 'center',
                               backgroundColor: '#282c34',
                               color: 'white'
                           }}>
                <Experience/>
            </ParallaxLayer>
            <ParallaxLayer offset={5} speed={0.5} onClick={() => parallax.scrollTo(6)}
                           style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Extracurricular/>
            </ParallaxLayer>
            <ParallaxLayer offset={6} speed={0.5} onClick={() => parallax.scrollTo(1)}
                           style={{
                               display: 'flex',
                               alignItems: 'center',
                               justifyContent: 'center',
                               backgroundColor: '#282c34',
                               color: 'white'
                           }}>
                <Contact/>
            </ParallaxLayer>
        </Parallax>
    </div>)
};
