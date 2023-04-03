import React from "react";
import { SimpleNavBar } from "../SimpleNavBar";
import { useParams } from "react-router-dom";
import {
  HackathonOne,
  HackathonTwo,
  NoProject,
  ProjectOne,
  ProjectTwo,
} from "../../constants";
import { Container, Grid, List, ListItem, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ProjectItem } from "./ProjectItem";
import { v4 as uuidv4 } from "uuid";

interface Props {}

interface Props1 {
  name: string | undefined;
}

function getProps({ name }: Props1) {
  if (!name) return;
  let project;
  switch (name) {
    case "starterhacks2020":
      project = HackathonOne;
      break;
    case "nsbehacks2020":
      project = HackathonTwo;
      break;
    case "shuffl":
      project = ProjectOne;
      break;
    case "astrojump":
      project = ProjectTwo;
      break;
    default:
      project = NoProject;
  }
  return project;
}

const useStyles: any = makeStyles({
  title: {
    fontSize: 42,
  },
});

export const Project: React.FC<Props> = () => {
  const { name } = useParams();

  const {
    title,
    year,
    date,
    location,
    projectTitle,
    summary,
    howItWorks,
    howWeBuilt,
    challenges,
    accomplishments,
    learned,
    next,
    repoUrl,
    technologies,
  } = getProps({ name: name });

  const classes = useStyles();

  if (!name)
    return (
      <div>
        <SimpleNavBar />
      </div>
    );

  return (
    <div>
      <SimpleNavBar />
      <Container>
        <Grid container direction={"column"} spacing={1}>
          <Typography
            variant={"h1"}
            className={classes.title}
            color="textPrimary"
            gutterBottom
          >
            {title} {year}
          </Typography>
          <Typography variant={"h6"} color="textSecondary" gutterBottom>
            {date} {location}
          </Typography>

          <ProjectItem title={`${projectTitle} Inspiration`} body={summary} />
          <ProjectItem title={"How it Works"} body={howItWorks} />
          <ProjectItem title={"How we built it"} body={howWeBuilt} />
          <ProjectItem title={"Challenges we ran into"} body={challenges} />
          <ProjectItem
            title={"Accomplishments that we're proud of"}
            body={accomplishments}
          />
          <ProjectItem title={"What we learned"} body={learned} />
          <ProjectItem title={`What's next for ${projectTitle}`} body={next} />

          <a href={repoUrl} rel={"noopener noreferrer"} target={"_blank"}>
            Repository
          </a>

          <Typography variant={"h6"} gutterBottom>
            Built with
          </Typography>
          <List>
            {technologies.map((name: React.ReactNode) => (
              <ListItem key={uuidv4()}>{name}</ListItem>
            ))}
          </List>
        </Grid>
      </Container>
    </div>
  );
};
