// @ts-nocheck
import React from "react";
import { Route } from "react-router-dom";
import { Container } from "@material-ui/core";

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
