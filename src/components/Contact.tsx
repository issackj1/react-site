import React from "react";
import { Grid, Typography } from "@material-ui/core";

interface Props {}

export const Contact: React.FC<Props> = () => {
  return (
    <Grid container direction="row" spacing={2}>
      <Grid item xs={12} sm={12}>
        <Typography variant={"h2"} align={"center"}>
          GET IN TOUCH
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography variant={"h5"} align={"center"}>
          Contact
        </Typography>
      </Grid>
    </Grid>
  );
};
