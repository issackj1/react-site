import React from "react";
import { Header } from "./Header";
import { Typography } from "@material-ui/core";

interface Props {
  children: any;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Typography>
      <Header />
      {children}
    </Typography>
  );
};
