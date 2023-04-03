import React from "react";
import { Grid, Typography } from "@mui/material";
import { ExtracurricularItem } from "./ExtracurricularItem";
import { ExtracurricularContent } from "../../constants";
import { v4 as uuidv4 } from "uuid";

interface Props {}

interface ExtracurricularContentItems {
  title: string;
  items: { name: string; link: string }[];
}

export const Extracurricular: React.FC<Props> = () => {
  const { title, content } = ExtracurricularContent;

  return (
    <Grid
      container
      direction={"row"}
      spacing={1}
      alignContent={"flex-start"}
      alignItems={"center"}
    >
      <Grid item xs={12} sm={12}>
        <Typography variant={"h3"} align={"center"}>
          {title}
        </Typography>
      </Grid>
      {content.map((object: ExtracurricularContentItems) => (
        <ExtracurricularItem
          key={uuidv4()}
          title={object.title}
          items={object.items}
        />
      ))}
    </Grid>
  );
};
