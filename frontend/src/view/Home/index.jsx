import { Grid} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

import Button from "../../Components/Button";
import Product from "../../Components/Product/Product";

const Home = () => {
  return (
    <Container>
      <Grid container spacing={2} style={{marginTop:"20px"}}>
        <Grid item sm={4} md={4} lg={4}>
          <h2>Products</h2>
        </Grid>
        <Grid item sm={4} md={4} lg={4}></Grid>
        <Grid item sm={4} md={4} lg={4}>
          <Button text="add more products" />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
      <Product/>
      </Grid>
    </Container>
  );
};

export default Home;
