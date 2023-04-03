// @ts-nocheck
import { Container, Fab, Typography } from "@mui/material";
import React, { useCallback, useContext } from "react";
import { animated, config, useSpring, SpringConfig } from "react-spring";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Education } from "../components/Education";
import { Experience } from "../components/experience/Experience";
import { Extracurricular } from "../components/extracurricular/Extracurricular";
import { Skills } from "../components/skills/Skills";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ParallaxContext } from "../components/ParallaxProvider";

interface Props {}

interface useSpringProps {
  config: SpringConfig;
  delay: number;
  to: { opacity: number }[];
  from: { opacity: number };
}

export const Home: React.FC<Props> = () => {
  const NUM_PAGES = 7;

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

  const handleClick = useCallback(
    (offset) => () => {
      parallax.scrollTo(offset);
    },
    [parallax]
  );

  const BackgroundLayer: React.FC<{ offset: number }> = ({
    offset,
  }: {
    offset: number;
  }) => (
    <ParallaxLayer
      key={offset}
      offset={offset}
      speed={backgroundLayerSpeed}
      style={{ backgroundColor: "#282c34" }}
    />
  );

  const ButtonLayer: React.FC<{ index: number }> = ({
    index,
  }: {
    index: number;
  }) => (
    <ParallaxLayer key={index} offset={index + 0.8} speed={1.25}>
      <Typography variant={"h1"} align={"center"}>
        <Fab
          variant={"extended"}
          color={"primary"}
          onClick={handleClick(index + 1)}
        >
          Continue
        </Fab>
      </Typography>
    </ParallaxLayer>
  );

  const BackToTopButtonLayer = ({ index }: { index: number }) => (
    <ParallaxLayer
      key={index}
      offset={index + 0.7 + 1}
      speed={buttonLayerSpeed}
      style={{
        width: "20%",
        marginLeft: "90%",
      }}
    >
      <Fab color={"secondary"} onClick={handleClick(0)}>
        <KeyboardArrowUpIcon fontSize={"large"} />
      </Fab>
    </ParallaxLayer>
  );

  const centeredStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Parallax pages={NUM_PAGES} ref={setParallax}>
      {/*Backgrounds*/}
      {blackBackGroundOffsets.map((offset: number) =>
        BackgroundLayer({ offset })
      )}
      <ParallaxLayer
        offset={0}
        speed={2}
        onClick={handleClick(1)}
        style={centeredStyle}
      >
        <animated.h1 style={h1Props}>Welcome to my Portfolio</animated.h1>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={mainLayerSpeed}
        onClick={handleClick(2)}
        style={centeredStyle}
      >
        <Container>
          <About />
        </Container>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={mainLayerSpeed}
        onClick={handleClick(3)}
        style={secondaryBackground}
      >
        <Container>
          <Skills />
        </Container>
      </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={mainLayerSpeed}
        onClick={handleClick(4)}
        style={centeredStyle}
      >
        <Education />
      </ParallaxLayer>
      <ParallaxLayer
        offset={4}
        speed={mainLayerSpeed}
        onClick={handleClick(5)}
        style={secondaryBackground}
      >
        <Experience />
      </ParallaxLayer>
      <ParallaxLayer
        offset={5}
        speed={mainLayerSpeed}
        onClick={handleClick(6)}
        style={centeredStyle}
      >
        <Container>
          <Extracurricular />
        </Container>
      </ParallaxLayer>
      <ParallaxLayer
        offset={6}
        speed={mainLayerSpeed}
        onClick={handleClick(1)}
        style={secondaryBackground}
      >
        <Contact />
      </ParallaxLayer>
      {/*button*/}
      {Array(numOfButtons)
        .fill(undefined)
        .map((object, i) => ButtonLayer({ index: i }))}
      {Array(NUM_PAGES)
        .fill(undefined)
        .map((object, i) => BackToTopButtonLayer({ index: i }))}
    </Parallax>
  );
};
