import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item sm={12} md={4} lg={4}>
          <h2>Major Project</h2>
        </Grid>
        <Grid item sm={12} md={4} lg={4}></Grid>
        <Grid item sm={12} md={4} lg={4}>
          <Link to="/">Home</Link>
          <Link to="/nodemailer">Node Mailer</Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
