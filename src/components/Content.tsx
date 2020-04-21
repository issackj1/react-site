import React from 'react';
import '../App.css';
import {About} from "../views/About";
import {Skills} from "../views/Skills";
import {Education} from "../views/Education";
import {Experience} from "../views/Experience";
import {Extracurricular} from "../views/Extracurricular";
import {Contact} from "../views/Contact";

interface Props {

}

export const Content: React.FC<Props> = () => {
    return (
        <div>
            <About/>
            <Skills/>
            <Education/>
            <Experience/>
            <Extracurricular/>
            <Contact/>
        </div>
    );
};
