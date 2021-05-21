import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

interface Props {
  title: string;
  items: string[];
}

export const SkillsItem: React.FC<Props> = (props) => {
  const { title, items } = props;
  return (
    <Grid item xs={6} sm={3}>
      <Typography variant={"h4"}>{title}</Typography>
      <ul className={"list-unstyled"}>
        {items.map((item: String) => (
          <li key={uuidv4()}>{item}</li>
        ))}
      </ul>
    </Grid>
  );
};
