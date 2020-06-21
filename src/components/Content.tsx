import React from 'react';
import '../App.css';
import {About} from "./About";
import {Skills} from "./Skills";
import {Education} from "./Education";
import {Experience} from "./Experience";
import {Extracurricular} from "./Extracurricular";
import {Contact} from "./Contact";
import {ParallaxLayer} from "react-spring/renderprops-addons";

interface Props {

}

export const Content: React.FC<Props> = () => {

    return (<>
            <ParallaxLayer offset={1} speed={2}>
                <About/>
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={2}>
                <Skills/>
            </ParallaxLayer>
            <ParallaxLayer offset={3} speed={2}>
                <Education/>
            </ParallaxLayer>
            <ParallaxLayer offset={4} speed={2}>
                <Experience/>
            </ParallaxLayer>
            <ParallaxLayer offset={5} speed={2}>
                <Extracurricular/>
            </ParallaxLayer>
            <ParallaxLayer offset={6} speed={0.5}>
                <Contact/>
            </ParallaxLayer>
        </>
    );
};
