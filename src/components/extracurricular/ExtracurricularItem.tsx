import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";

interface Props {
  title: string;
  items: { name: string; link: string }[];
}

export const ExtracurricularItem: React.FC<Props> = (props) => {
  const { title, items } = props;
  return (
    <Grid item xs={6} sm={6} alignContent={"flex-start"}>
      <Typography variant={"h4"} align={"center"}>
        {title}
      </Typography>
      <List dense>
        {items.map((object: any) => (
          <ListItem
            alignItems={"center"}
            key={uuidv4()}
            // slotProps={{ root: { justifyContent: "center" } }}
          >
            <Card>
              <CardActionArea>
                <CardContent>{object.name}</CardContent>
                <a
                  key={uuidv4()}
                  href={object.link}
                  rel={"noopener noreferrer"}
                  target={"_blank"}
                >
                  Link
                </a>
              </CardActionArea>
            </Card>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};
