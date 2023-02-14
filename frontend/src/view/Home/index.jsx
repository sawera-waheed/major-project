import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "../../Components/Button";
import Navbar from "../../Components/Navbar";
import Product from "../../Components/Product/Product";
import { useNavigate } from "react-router-dom";
   
const Home = () => {
 
  const navigate = useNavigate()
  const [data, setData] = useState(false);

  const HomeValidate = async () => {
    let token = localStorage.getItem("usersdatatoken");
    const res = await fetch("/validUser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await res.json();
    if (res.status === 200) {
      navigate("/home")
    } else if (res.status === 401) {
      navigate("*");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      HomeValidate();
      setData(true);
    }, 2000);
  }, []);
  return (
    <>
      <Navbar />
      {data ? (
        <Container>
          <Grid
            container
            spacing={2}
            style={{ marginTop: "20px", marginBottom: "40px" }}
          >
            <Grid item sm={4} md={4} lg={4}>
              <h2>Products</h2>
            </Grid>
            <Grid item sm={4} md={4} lg={4}></Grid>
            <Grid item sm={4} md={4} lg={4} style={{ justifyContent: "end" }}>
              <Button text="add more products" />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Product />
          </Grid>
        </Container>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          Loading... &nbsp;
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default Home;
