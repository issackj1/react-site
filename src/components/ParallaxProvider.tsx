import React, { RefObject, useState } from "react";
import PropTypes from "prop-types";
import { Parallax } from "@react-spring/parallax";

ParallaxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

interface ParallaxContextProps {
  parallax: typeof Parallax | RefObject<any> | null;
  setParallax: React.Dispatch<
    React.SetStateAction<typeof Parallax | RefObject<any> | null>
  >;
}

export const ParallaxContext = React.createContext({
  parallax: null,
  setParallax: () => null,
} as ParallaxContextProps);

function ParallaxProvider(props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  const [parallax, setParallax] = useState<
    typeof Parallax | RefObject<any> | null
  >(React.createRef);

  return (
    <ParallaxContext.Provider value={{ parallax, setParallax }}>
      {props.children}
    </ParallaxContext.Provider>
  );
}

export default ParallaxProvider;
