// @ts-nocheck
import React, { RefObject } from "react";
import { Parallax } from "@react-spring/parallax";
import {
  AppBar,
  Container,
  Grid,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { navProps } from "../../constants";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  parallax: typeof Parallax | RefObject<any> | null;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbarLink: {
    margin: 3,
    padding: 3,
  },
}));

export const Header: React.FC<Props> = ({ parallax }) => {
  const { navLinks } = navProps;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Container>
            <Grid container alignItems={"center"}>
              <Typography variant="h6" className={classes.title}>
                <Link underline={"none"} color={"inherit"} href={"/"}>
                  Issack John
                </Link>
              </Typography>
              {navLinks.map(({ title }, i) => (
                <Link
                  underline={"none"}
                  className={classes.toolbarLink}
                  onClick={() => parallax.scrollTo(i + 1)}
                  key={i}
                  color="inherit"
                  variant={"subtitle2"}
                  component={"button"}
                >
                  {title}
                </Link>
              ))}
              <Link
                underline={"none"}
                className={classes.toolbarLink}
                color={"inherit"}
                href={"/financialLiteracy"}
                variant={"subtitle2"}
              >
                Financial Literacy
              </Link>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};
