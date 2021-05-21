import React, { RefObject } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Parallax } from "react-spring/renderprops-addons";
import { Grid } from "@material-ui/core";

interface Props {
  parallax: Parallax | RefObject<any> | null;
  children: any;
}

export const Layout: React.FC<Props> = ({ parallax, children }) => {
  return (
    <Grid container direction={"column"}>
      <Grid item>
        <Header parallax={parallax} />
      </Grid>
      <Grid item>{children}</Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};
