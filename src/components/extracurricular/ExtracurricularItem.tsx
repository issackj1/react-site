import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

interface Props {
  title: string;
  items: { name: string; link: string }[];
}

export const ExtracurricularItem: React.FC<Props> = (props) => {
  const { title, items } = props;
  return (
    <Grid
      container
      direction={"column"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Grid item xs={12} sm={12}>
        <Typography variant={"h4"} align={"center"}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <List dense={true}>
          {items.map((object: any) => {
            return (
              <ListItem>
                <Card>
                  <CardActionArea>
                    <CardContent></CardContent>
                    <a
                      key={uuidv4()}
                      href={object.link}
                      rel={"noopener noreferrer"}
                      target={"_blank"}
                    >
                      {object.name}
                    </a>
                  </CardActionArea>
                </Card>
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
};
