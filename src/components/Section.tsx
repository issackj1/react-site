// @ts-nocheck
import React from "react";
import { Route } from "react-router-dom";
import { Container } from "@mui/material";

export const Section = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      // authorised so return component
      return (
        <Container>
          <Component {...props} />
        </Container>
      );
    }}
  />
);
