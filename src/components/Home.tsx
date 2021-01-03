// @ts-nocheck
import {Box, Button, Container, Grid} from "@material-ui/core";
import React, {RefObject, useState} from 'react';
import {animated, config, useSpring} from 'react-spring';
import {Parallax, ParallaxLayer} from "react-spring/renderprops-addons";
import {SpringConfig} from "react-spring/renderprops-universal";
import {About} from "./About";
import {Contact} from "./Contact";
import {Education} from "./Education";
import {Experience} from "./experience/Experience";
import {Extracurricular} from "./extracurricular/Extracurricular";
import {NavBar} from "./NavBar";
import {Section} from "./Section";
import {Skills} from "./skills/Skills";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from "@material-ui/core/IconButton";
import {v4 as uuidv4} from "uuid";

interface Props {
}

interface useSpringProps {
    config: SpringConfig;
    delay: number;
    to: { opacity: number; }[];
    from: { opacity: number; };
}


export const Home: React.FC<Props> = (props) => {


    const [parallax, setParallax] = useState<Parallax | RefObject<any> | null>(React.createRef);

    const h1Props = useSpring<useSpringProps>({
        config: config.molasses,
        delay: 1000,
        opacity: 1,
        from: {
            opacity: 0,
        }
    });

    const secondaryBackground = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    };

    const backgroundLayerSpeed = 0.5,
        mainLayerSpeed = 1,
        buttonLayerSpeed = 0.5,
        numOfButtons = 6,
        blackBackGroundOffsets = [2,4,6];

    return (<>
        <Parallax pages={7} scrolling={true} ref={setParallax}>
            {/*Backgrounds*/}
            {
                blackBackGroundOffsets.map((offset: number) => <ParallaxLayer key={uuidv4()} offset={offset}
                                                                                    speed={backgroundLayerSpeed}
                                                                                    style={{backgroundColor: '#282c34'}}/>)
            }
            <ParallaxLayer offset={0} speed={2} onClick={() => parallax.scrollTo(1)}
                           style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Container>
                    <Box my={4}>
                        <Grid container justify="center">
                            <animated.h1 style={h1Props}>Welcome</animated.h1>
                        </Grid>
                    </Box>
                </Container>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={2} factor={1 / 6}>
                <NavBar parallax={parallax}/>
            </ParallaxLayer>

            <ParallaxLayer
                offset={1} speed={mainLayerSpeed} onClick={() => parallax.scrollTo(2)}
                style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Section component={About}/>
            </ParallaxLayer>

            <ParallaxLayer offset={2} speed={mainLayerSpeed} onClick={() => parallax.scrollTo(3)}
                           style={secondaryBackground}>
                <Section component={Skills}/>
            </ParallaxLayer>
            <ParallaxLayer offset={3} speed={mainLayerSpeed} onClick={() => parallax.scrollTo(4)}
                           style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Section component={Education}/>
            </ParallaxLayer>
            <ParallaxLayer offset={4} speed={mainLayerSpeed} onClick={() => parallax.scrollTo(5)}
                           style={secondaryBackground}>
                <Section component={Experience}/>
            </ParallaxLayer>
            <ParallaxLayer offset={5} speed={mainLayerSpeed} onClick={() => parallax.scrollTo(6)}
                           style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Extracurricular/>
            </ParallaxLayer>
            <ParallaxLayer offset={6} speed={mainLayerSpeed} onClick={() => parallax.scrollTo(1)}
                           style={secondaryBackground}>
                <Section component={Contact}/>
            </ParallaxLayer>

            {/*button*/}
            {Array.from(Array(numOfButtons)).map((object, i) => <ParallaxLayer key={i} offset={i + 0.8} speed={1}>
                    <Grid container justify="center">
						<span onClick={() => parallax.scrollTo(i === numOfButtons - 1 ? 1 : i + 1)}>
							<Button variant="contained" color={"primary"} size={"small"}
                                    block={"true"}>Continue</Button>
						</span>
                    </Grid>
                </ParallaxLayer>
            )}

            {
                Array.from(Array(7)).map((object, i) => <ParallaxLayer key={i} offset={i + 0.7 + 1}
                                                                       speed={buttonLayerSpeed}
                                                                       style={{
                                                                           display: 'block',
                                                                           width: '20%',
                                                                           marginLeft: '95%'
                                                                       }}>
					<span onClick={() => parallax.scrollTo(0)}>
						<IconButton edge="start" color="inherit" aria-label="arrow" fontSize={{fontSize: 200}}>
							<KeyboardArrowUpIcon fontSize={"large"}/>
						</IconButton>
					</span>
                </ParallaxLayer>)
            }
        </Parallax>
    </>)
};
