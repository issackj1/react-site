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
  return (
    <div className={"container"} id={"extracurricular"}>
      <Grid container direction={"row"} spacing={1}>
        <Grid item xs={12} sm={12}>
          <Typography variant={"h3"} gutterBottom align={"center"}>
            {ExtracurricularContent.title}
          </Typography>
        </Grid>
        {ExtracurricularContent.content.map(
          (object: ExtracurricularContentItems, index: number) => (
            <ExtracurricularItem
              key={index}
              title={object.title}
              items={object.items}
            />
          )
        )}
      </Grid>
    </div>
  );
};
