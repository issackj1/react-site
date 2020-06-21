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
            <ParallaxLayer offset={1} speed={0.5}>
                <About/>
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={0.5}>
                <Skills/>
            </ParallaxLayer>
            <ParallaxLayer offset={3} speed={0.5}>
                <Education/>
            </ParallaxLayer>
            <ParallaxLayer offset={4} speed={0.5}>
                <Experience/>
            </ParallaxLayer>
            <ParallaxLayer offset={5} speed={0.5}>
                <Extracurricular/>
            </ParallaxLayer>
            <ParallaxLayer offset={6} speed={0.5}>
                <Contact/>
            </ParallaxLayer>
        </>
    );
};
