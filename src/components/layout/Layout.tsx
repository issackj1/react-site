import React, { RefObject } from "react";
import { Header } from "./Header";
import { Parallax } from "react-spring/renderprops-addons";
import { Typography } from "@material-ui/core";

interface Props {
  parallax: Parallax | RefObject<any> | null;
  children: any;
}

export const Layout: React.FC<Props> = ({ parallax, children }) => {
  return (
    <Typography>
      <Header parallax={parallax} />
      {children}
    </Typography>
  );
};
