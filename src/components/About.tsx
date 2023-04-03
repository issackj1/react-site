import React from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import { AboutContent } from "../constants";
import profilePicture from "../images/profile.jpg";

interface Props {}

export const About: React.FC<Props> = () => {
  return (
    <Grid container direction={"column"} spacing={3}>
      <Typography variant={"h2"} align={"center"}>
        {AboutContent.title}
      </Typography>
      <Avatar
        variant={"rounded"}
        alt="Issack John"
        src={profilePicture}
        sx={{ width: "25rem", height: "20rem", margin: "auto" }}
      />
      <Typography variant={"body1"} align={"center"}>
        {AboutContent.summary}
      </Typography>
    </Grid>
  );
};
