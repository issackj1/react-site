// @ts-nocheck
import React, { useContext } from "react";
import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";
import { navProps } from "../../constants";
import { makeStyles } from "@mui/styles";
import { ParallaxContext } from "../ParallaxProvider";

interface Props {}

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

export const Header: React.FC<Props> = () => {
  const { navLinks } = navProps;
  const classes = useStyles();
  const { parallax } = useContext(ParallaxContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} component={"div"}>
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
        </Toolbar>
      </AppBar>
    </Box>
  );
};
