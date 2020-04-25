import React from 'react';
import '../App.css';
import {About} from "./About";
import {Skills} from "./Skills";
import {Education} from "./Education";
import {Experience} from "./Experience";
import {Extracurricular} from "./Extracurricular";
import {Contact} from "./Contact";
import {Container} from "react-bootstrap";

interface Props {

}

export const Content: React.FC<Props> = () => {
    return (
        <Container>
            <About/>
            <Skills/>
            <Education/>
            <Experience/>
            <Extracurricular/>
            <Contact/>
        </Container>
    );
};
