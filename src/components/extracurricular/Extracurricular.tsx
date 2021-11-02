import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { ExtracurricularItem } from "./ExtracurricularItem";
import { ExtracurricularContent } from "../../constants";

interface Props {}

interface ExtracurricularContentItems {
  title: string;
  items: { name: string; link: string }[];
}

export const Extracurricular: React.FC<Props> = () => {
  const { title, content } = ExtracurricularContent;

  return (
    <Grid container direction={"row"} justify={"center"}>
      <Grid item xs={12} sm={12}>
        <Typography variant={"h3"} align={"center"}>
          {title}
        </Typography>
      </Grid>
      {content.map((object: ExtracurricularContentItems, index: number) => (
        <Grid item xs={4} sm={4}>
          <ExtracurricularItem
            key={index}
            title={object.title}
            items={object.items}
          />
        </Grid>
      ))}
    </Grid>
  );
};
