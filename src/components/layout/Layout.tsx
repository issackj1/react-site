import React from "react";
import { Header } from "./Header";

interface Props {
  children: any;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
