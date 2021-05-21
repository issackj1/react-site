import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { SkillsContent } from "../../constants";
import { SkillsItem } from "./SkillsItem";
import { v4 as uuidv4 } from "uuid";

interface Props {}

interface SkillsContentItems {
  title: string;
  items: string[];
}

export const Skills: React.FC<Props> = () => {
  return (
    <Grid container direction="row" spacing={1} justify="center">
      <Grid item xs={12} sm={12}>
        <Typography variant={"h2"} align={"center"} gutterBottom>
          {SkillsContent.title}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography variant={"h5"} align={"center"}>
          {SkillsContent.subtitle}
        </Typography>
      </Grid>
      {SkillsContent.content.map((object: SkillsContentItems) => (
        <SkillsItem key={uuidv4()} title={object.title} items={object.items} />
      ))}
    </Grid>
  );
};
