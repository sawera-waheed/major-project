import { Grid} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

import Button from "../../Components/Button";
import Navbar from "../../Components/Navbar";
import Product from "../../Components/Product/Product";

const Home = () => {
  return (<> 
    <Navbar/>
    <Container>
      <Grid container spacing={2} style={{marginTop:"20px", marginBottom: "40px"}}>
        <Grid item sm={4} md={4} lg={4}>
          <h2>Products</h2>
        </Grid>
        <Grid item sm={4} md={4} lg={4}></Grid>
        <Grid item sm={4} md={4} lg={4} style={{justifyContent: "end"}}>
          <Button text="add more products" />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
      <Product/>
      </Grid>
    </Container>
    </>
  );
};

export default Home;
