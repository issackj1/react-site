// @ts-nocheck
import React from "react";
import {
  Collapse,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Theme,
  Typography,
} from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import Iframe from "react-iframe";
import { AffiliateLinks } from "../../constants";
import { makeStyles } from "@mui/styles";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MailIcon from "@mui/icons-material/Mail";

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export const Whimsical: React.FC<Props> = () => {
  const { FintechApps, Newsletters } = AffiliateLinks;
  const classes = useStyles();
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  return (
    <Container maxWidth="lg">
      <Typography color={"textPrimary"} variant={"h3"} align={"center"}>
        Financial Literacy
      </Typography>
      <Typography color={"textPrimary"} variant={"body1"} align={"center"}>
        <strong>Financial literacy</strong> is the ability to understand and
        effectively use various financial skills, including personal financial
        management, budgeting, and investing.
      </Typography>
      <List
        subheader={
          <ListSubheader component={"div"}>FinTech Apps</ListSubheader>
        }
        className={classes.root}
      >
        <ListItem button onClick={handleClick1}>
          <ListItemIcon>
            <MonetizationOnIcon />
          </ListItemIcon>
          <ListItemText primary="Trading" />
          {open1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {FintechApps.map(({ title, link }, i) => (
              <ListItemLink key={i} href={link} className={classes.nested}>
                <ListItemText primary={title} />
              </ListItemLink>
            ))}
          </List>
        </Collapse>
      </List>
      <List
        subheader={<ListSubheader component={"div"}>Others</ListSubheader>}
        className={classes.root}
      >
        <ListItem button onClick={handleClick2}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Newsletters" />
          {open2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {Newsletters.map(({ title, link }, i) => (
              <ListItemLink key={i} href={link} className={classes.nested}>
                <ListItemText primary={title} />
              </ListItemLink>
            ))}
          </List>
        </Collapse>
      </List>
      <Iframe
        url="https://whimsical.com/embed/337yB3814c7Fs1JVmmqQGU"
        width={"1600px"}
        height="500px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
      />
    </Container>
  );
};
