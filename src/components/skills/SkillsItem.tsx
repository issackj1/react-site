import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";

interface Props {
  title: string;
  items: string[];
}

export const SkillsItem: React.FC<Props> = (props) => {
  const { title, items } = props;
  return (
    <Grid item xs={6} sm={3} alignContent={"flex-start"}>
      <Typography align={"center"} variant={"h4"}>
        {title}
      </Typography>
      <List dense>
        {items.map((item: String) => (
          <ListItem key={uuidv4()}>
            <ListItemText
              primaryTypographyProps={{ align: "center" }}
              primary={item}
            />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};
