import React from "react";
import { Route, Switch } from "react-router-dom";
import { Whimsical } from "../components/financialLiteracy/Whimsical";

interface Props {}

export const FinancialLiteracy: React.FC<Props> = () => {
  return (
    <Switch>
      <Route path={"/"} component={Whimsical} />
    </Switch>
  );
};
