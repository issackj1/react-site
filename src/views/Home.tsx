// @ts-nocheck
import { Container, Fab, Typography } from "@mui/material";
import React, { useContext } from "react";
import { animated, config, useSpring, SpringConfig } from "react-spring";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Education } from "../components/Education";
import { Experience } from "../components/experience/Experience";
import { Extracurricular } from "../components/extracurricular/Extracurricular";
import { Skills } from "../components/skills/Skills";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { v4 as uuidv4 } from "uuid";
import { ParallaxContext } from "../components/ParallaxProvider";

interface Props {}

interface useSpringProps {
  config: SpringConfig;
  delay: number;
  to: { opacity: number }[];
  from: { opacity: number };
}

export const Home: React.FC<Props> = () => {
  const { parallax, setParallax } = useContext(ParallaxContext);

  const h1Props = useSpring<useSpringProps>({
    config: config.molasses,
    delay: 800,
    to: { opacity: 1 },
    from: { opacity: 0 },
  });

  const secondaryBackground = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  };

  const backgroundLayerSpeed = 0.6,
    mainLayerSpeed = 1,
    buttonLayerSpeed = 0.6,
    numOfButtons = 6,
    blackBackGroundOffsets = [2, 4, 6];

  return (
    <Parallax pages={7} ref={setParallax}>
      {/*Backgrounds*/}
      {blackBackGroundOffsets.map((offset: number) => (
        <ParallaxLayer
          key={uuidv4()}
          offset={offset}
          speed={backgroundLayerSpeed}
          style={{ backgroundColor: "#282c34" }}
        />
      ))}
      <ParallaxLayer
        offset={0}
        speed={2}
        onClick={() => parallax.scrollTo(1)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <animated.h1 style={h1Props}>Welcome to my Portfolio</animated.h1>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={mainLayerSpeed}
        onClick={() => parallax.scrollTo(2)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <About />
        </Container>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={mainLayerSpeed}
        onClick={() => parallax.scrollTo(3)}
        style={secondaryBackground}
      >
        <Container>
          <Skills />
        </Container>
      </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={mainLayerSpeed}
        onClick={() => parallax.scrollTo(4)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Education />
      </ParallaxLayer>
      <ParallaxLayer
        offset={4}
        speed={mainLayerSpeed}
        onClick={() => parallax.scrollTo(5)}
        style={secondaryBackground}
      >
        <Experience />
      </ParallaxLayer>
      <ParallaxLayer
        offset={5}
        speed={mainLayerSpeed}
        onClick={() => parallax.scrollTo(6)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <Extracurricular />
        </Container>
      </ParallaxLayer>
      <ParallaxLayer
        offset={6}
        speed={mainLayerSpeed}
        onClick={() => parallax.scrollTo(1)}
        style={secondaryBackground}
      >
        <Contact />
      </ParallaxLayer>
      {/*button*/}
      {Array.from(Array(numOfButtons)).map((object, i) => (
        <ParallaxLayer key={i} offset={i + 0.8} speed={1.25}>
          <Typography variant={"h1"} align={"center"}>
            <Fab
              variant={"extended"}
              color={"primary"}
              onClick={() => parallax.scrollTo(i + 1)}
            >
              Continue
            </Fab>
          </Typography>
        </ParallaxLayer>
      ))}
      {Array.from(Array(7)).map((object, i) => (
        <ParallaxLayer
          key={i}
          offset={i + 0.7 + 1}
          speed={buttonLayerSpeed}
          style={{
            width: "20%",
            marginLeft: "90%",
          }}
        >
          <Fab color={"secondary"} onClick={() => parallax.scrollTo(0)}>
            <KeyboardArrowUpIcon fontSize={"large"} />
          </Fab>
        </ParallaxLayer>
      ))}
    </Parallax>
  );
};
