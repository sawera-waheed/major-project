import React from "react";
import { Grid } from "@mui/material";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = user;
    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (res.status === 422) {
      window.alert("All fields required");
    } else if (res.status === 406) {
      window.alert(
        "This email is already registered. Plaese enter different email"
      );
    } else if (res.status === 409) {
      window.alert("Password does not match");
    } else {
      window.alert("Registered Successfully");
      setUser({
        name: "",
        email: "",
        password: "",
        cpassword: "",
      });
      navigate("/")
    }
  };
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={4} lg={4}></Grid>
      <Grid item sm={12} md={8} lg={8}>
        <div className="adminlogin">
          <h1>Sign Up</h1>
          <h3>Your Social Compaigns</h3>
          <div className="link-buttons">
            <div className="google-button">
              <a href="#" className="fa fa-google"></a>Sign up with Google
            </div>
            <div className="facebook-button">
              <a href="#" class="fa fa-facebook"></a>Sign up with Facebook
            </div>
          </div>
          <input
            id="nameinput"
            type="text"
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
          <input
            id="emailinput"
            type="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <input
            id="passwordinput"
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          ></input>
          <input
            id="cpasswordinput"
            type="password"
            name="cpassword"
            placeholder="Confirm Password"
            value={user.cpassword}
            onChange={handleChange}
          ></input>

          <div className="button" onClick={postData}>
            Sign Up
          </div>
          <p className="signup-para">
            Already Registered <a href="/">Sign in</a>
          </p>
        </div>
      </Grid>
      {/* <Grid item sm={12} md={1} lg={1}></Grid> */}
    </Grid>
  );
};

export default Register;
