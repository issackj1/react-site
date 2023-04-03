import React from "react";
import { Grid, Typography } from "@mui/material";
import { ExperienceContent } from "../../constants";
import { ExperienceItem } from "./ExperienceItem";
import { v4 as uuidv4 } from "uuid";

interface Props {}

interface ExperienceContentType {
  title: string;
  company: string;
  date: string;
}

export const Experience: React.FC<Props> = () => {
  const { title, subtitle, items } = ExperienceContent;
  return (
    <Grid container direction={"row"} justifyContent={"center"}>
      <Grid item xs={12} sm={12}>
        <Typography variant={"h2"} align={"center"}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography variant={"h5"} align={"center"}>
          {subtitle}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        {items.map((job: ExperienceContentType) => (
          <ExperienceItem
            title={job.title}
            company={job.company}
            date={job.date}
            key={uuidv4()}
          />
        ))}
      </Grid>
    </Grid>
  );
};
