import React, { RefObject } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Parallax } from "react-spring/renderprops-addons";

interface Props {
  parallax: Parallax | RefObject<any> | null;
  children: any;
}

export const Layout: React.FC<Props> = ({ parallax, children }) => {
  return (
    <div>
      <Header parallax={parallax} />
      {children}
      <Footer />
    </div>
  );
};
