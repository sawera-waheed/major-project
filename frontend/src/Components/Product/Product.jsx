import React, { useEffect } from "react";
import {Card, Grid, CardContent } from "@mui/material";
import { useState } from "react";
import { Container } from "@mui/system";

const Product = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/products");
      console.log(res);
      const data = await res.json();
      console.log(data);
      setProduct(data);
    };
    fetchData();
  }, []);
  return (
    <Container>
      <Grid conrtainer spacing={2}>
        {products.map(product => (
          <Card key={product.id} sx={{ maxWidth: 345 }}>
            <CardContent>
              <img src={product.img} alt="product display"/>
              <h1>{product.name}</h1>
              <p>{product.price}</p>
              <p>{product.quantity}</p>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Product;
