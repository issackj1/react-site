import React from "react";
import { Grid, Typography } from "@material-ui/core";

interface Props {}

export const Education: React.FC<Props> = () => {
  return (
    <Grid container direction={"row"} justify={"center"}>
      <Grid item xs={12} sm={12}>
        <Typography variant={"h2"} align={"center"}>
          EDUCATION
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography variant={"h5"} align={"center"}>
          Education
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography variant={"body1"} align={"center"}>
          Bachelor of Science Major in Computer Science
        </Typography>
      </Grid>
    </Grid>
  );
};
