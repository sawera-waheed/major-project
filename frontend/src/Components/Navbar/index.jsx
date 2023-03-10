import { Grid } from "@mui/material";

import { GRID, LINK } from "./style";
import React from "react";
import Button from "../Button";

const Navbar = () => {
  const logout = () => {};
  return (
    <div>
      <GRID container spacing={2}>
        <Grid item sm={12} md={4} lg={4}>
          <h2>Major Project</h2>
        </Grid>
        <Grid item sm={12} md={4} lg={4}></Grid>
        <Grid item sm={12} md={4} lg={4} style={{ paddingTop: "36px" }}>
          <LINK to="/home">Home</LINK>
          <LINK to="/nodemailer">Node Mailer</LINK>
          <Button
            text="Logout"
            borderColor="white"
            borderText="white"
            function={logout}
          ></Button>
        </Grid>
      </GRID>
    </div>
  );
};

export default Navbar;
