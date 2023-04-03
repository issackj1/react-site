import React from "react";
import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface Props {}

const useStyles: any = makeStyles(
  (theme: { spacing: (arg0: number) => any }) => ({
    root: {
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export const SimpleNavBar: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position={"static"}>
        <Toolbar variant={"dense"}>
          <Typography variant="h6" className={classes.title}>
            <Link underline={"none"} color={"inherit"} href={"/"}>
              Issack John
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
