import React from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import { AboutContent } from "../constants";
import profilePicture from "../images/profile.jpg";

interface Props {}

export const About: React.FC<Props> = () => {
  return (
    <Grid
      container
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
    >
      <Grid item sm={12}>
        <Typography variant={"h2"} align={"center"}>
          {AboutContent.title}
        </Typography>
      </Grid>
      <Grid item sm={4}>
        <Avatar
          variant={"rounded"}
          alt="Issack John"
          src={profilePicture}
          sx={{ width: "20rem", height: "15rem", margin: "auto" }}
        />
      </Grid>
      <Grid item sm={4}>
        <Typography variant={"body1"} align={"center"}>
          {AboutContent.summary}
        </Typography>
      </Grid>
    </Grid>
  );
};
