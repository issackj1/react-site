import React from "react";
import { Route, Switch } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { SimpleNavBar } from "../components/SimpleNavBar";
import { Whimsical } from "../components/financialLiteracy/Whimsical";

interface Props {}

export const FinancialLiteracy: React.FC<Props> = () => {
  return (
    <Grid direction={"row"}>
      <Grid item xs={12} sm={12}>
        <SimpleNavBar />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Switch>
          <Route path={"/"} component={Whimsical} />
        </Switch>
      </Grid>
    </Grid>
  );
};
