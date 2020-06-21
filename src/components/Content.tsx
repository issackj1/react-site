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
            <ParallaxLayer factor={0.5} offset={2} speed={2}>
                <Skills/>
            </ParallaxLayer>
            <ParallaxLayer factor={0.5} offset={3} speed={2}>
                <Education/>
            </ParallaxLayer>
            <ParallaxLayer factor={0.5} offset={4} speed={2}>
                <Experience/>
            </ParallaxLayer>
            <ParallaxLayer factor={0.5} offset={5} speed={2}>
                <Extracurricular/>
            </ParallaxLayer>
            <ParallaxLayer factor={0.5} offset={6} speed={0.5}>
                <Contact/>
            </ParallaxLayer>
        </>
    );
};
