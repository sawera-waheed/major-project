import React, { useEffect } from "react";
import { CardContent } from "@mui/material";
import { useState } from "react";
import { GRID, IMG, P, CARD, SPAN, BUTTON } from "./style";
import { Container } from "@mui/system";
import Button from "../Button";

const Product = () => {
  const [products, setProduct] = useState([]);
  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/products");
    console.log(res);
    const data = await res.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const deleteItem = async(e) => {
    const id= e;
    const res = await fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    });
    const data = await res.json();
    console.log(data);
    if(res.status===200){
      window.alert("Delete Item");
      fetchData();
    }
  };
  const editItem = (e) => {};
  return (
    <Container>
      <GRID container spacing={2}>
        {products.map((product) => (
          <CARD key={product.id} sx={{ maxWidth: 345 }}>
            <CardContent>
              <SPAN>
                <IMG src={product.img} />
              </SPAN>
              <P>{product.name}</P>
              <P size="12px"> Price: {product.price}</P>
              <Button function={() => editItem(product)} text="Edit"></Button>
              <Button
                function={() => deleteItem(product._id)}
                text="Delete"
              ></Button>
            </CardContent>
          </CARD>
        ))}
      </GRID>
    </Container>
  );
};

export default Product;
