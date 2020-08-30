// @ts-nocheck
import { Box, Button, Container, Grid } from "@material-ui/core";
import React, { RefObject, useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { SpringConfig } from "react-spring/renderprops-universal";
import { About } from "./About";
import { Contact } from "./Contact";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Extracurricular } from "./Extracurricular";
import { NavBar } from "./NavBar";
import { Section } from "./Section";
import { Skills } from "./Skills";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from "@material-ui/core/IconButton";

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

	const h1Props = useSpring({
		config: config.molasses,
		delay: 3000,
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

	const buttons = ['Continue', 'Continue', 'Continue', 'Continue', 'Continue', 'Continue'];
	const backToTop = [1, 2, 3, 4, 5, 6, 7];
	// <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#007b3d3d' }}>

	return (<>
		<Parallax pages={ 7 } scrolling={ true } ref={ setParallax }>
			{/*Backgrounds*/ }
			<ParallaxLayer offset={ 2 } speed={ 1 } style={ { backgroundColor: '#282c34' } }/>
			<ParallaxLayer offset={ 4 } speed={ 1 } style={ { backgroundColor: '#282c34' } }/>
			<ParallaxLayer offset={ 6 } speed={ 1 } style={ { backgroundColor: '#282c34' } }/>
			<ParallaxLayer offset={ 0 } speed={ 2 } onClick={ () => parallax.scrollTo(1) }
			               style={ { display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
				<Container>
					<Box my={ 4 }>
						<Grid container justify="center">
							<animated.h1 style={ h1Props }>Welcome</animated.h1>
						</Grid>
					</Box>
				</Container>
			</ParallaxLayer>

			<ParallaxLayer offset={ 0 } speed={ 2 } factor={ 1 / 6 }>
				<NavBar parallax={ parallax }/>
			</ParallaxLayer>

			<ParallaxLayer
				offset={ 1 } speed={ 0.5 } onClick={ () => parallax.scrollTo(2) }
				style={ { display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
				<Section component={ About }/>
			</ParallaxLayer>

			<ParallaxLayer offset={ 2 } speed={ 0.5 } onClick={ () => parallax.scrollTo(3) }
			               style={ secondaryBackground }>
				<Section component={ Skills }/>
			</ParallaxLayer>
			<ParallaxLayer offset={ 3 } speed={ 0.5 } onClick={ () => parallax.scrollTo(4) }
			               style={ { display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
				<Section component={ Education }/>
			</ParallaxLayer>
			<ParallaxLayer offset={ 4 } speed={ 0.5 } onClick={ () => parallax.scrollTo(5) }
			               style={ secondaryBackground }>
				<Section component={ Experience }/>
			</ParallaxLayer>
			<ParallaxLayer offset={ 5 } speed={ 0.5 } onClick={ () => parallax.scrollTo(6) }
			               style={ { display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
				<Extracurricular/>
			</ParallaxLayer>
			<ParallaxLayer offset={ 6 } speed={ 0.5 } onClick={ () => parallax.scrollTo(1) }
			               style={ secondaryBackground }>
				<Section component={ Contact }/>
			</ParallaxLayer>

			{/*button*/ }
			{ buttons.map((object, i) => <ParallaxLayer key={ i } offset={ i + 0.8 } speed={ 1 }
			                                            style={ {
				                                            display: 'block',
				                                            width: '20%',
				                                            marginLeft: '47%'
			                                            } }>
				<span onClick={ () => parallax.scrollTo(i === buttons.length - 1 ? 1 : i + 1) }>
					<Button variant="contained" color={ "primary" } size={ "lg" } block>{ object }</Button>
				</span>
				</ParallaxLayer>
			) }


			{
				backToTop.map((object, i) => <ParallaxLayer key={ i } offset={ i + 0.7 + 1 } speed={ 1 }
				                                            style={ {
					                                            display: 'block',
					                                            width: '20%',
					                                            marginLeft: '95%'
				                                            } }>
					<span onClick={ () => parallax.scrollTo(0) }>
						<IconButton edge="start" color="inherit" aria-label="arrow" fontSize={ { fontSize: 200 } }>
							<KeyboardArrowUpIcon fontSize={ "large" }/>
						</IconButton>
					</span>
				</ParallaxLayer>)
			}
		</Parallax>
	</>)
};
