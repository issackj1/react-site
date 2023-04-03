import { Link, Typography } from "@mui/material";
import React from "react";

export const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://react-site-five.vercel.app/">
        Issack John
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
