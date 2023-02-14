import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import gif from "../../assets/images/gif.gif";
import Navbar from "../../Components/Navbar";
const Error = () => {
  return (
    <>
      <Navbar />
      <Grid style={{marginTop :"20px" , display: "flex",justifyContent: "center"}}>
        <img src={gif} width="auto" height="700px"></img>
      </Grid>
    </>
  );
};

export default Error;
