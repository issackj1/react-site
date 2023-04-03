import React from "react";
import { Typography } from "@mui/material";

interface Props {
  title: string;
  body: string;
}

export const ProjectItem: React.FC<Props> = (props) => {
  const { title, body } = props;
  return (
    <>
      <Typography variant={"h5"} gutterBottom>
        {title}
      </Typography>
      <Typography variant={"body1"} gutterBottom>
        {body}
      </Typography>
    </>
  );
};
