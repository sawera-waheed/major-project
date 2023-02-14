import React from "react";
import { Grid } from "@mui/material";

import "./forgetpass.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState(false);
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const SendEmail = async (e) => {
    e.preventDefault();
    const res = await fetch("/sendPasswordLink", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (res.status === 422) {
      window.alert("Please Enter Email");
    } else if (res.status === 401) {
      window.alert(" please enter a valid email");
    } else if (res.status === 200) {
      setMsg(true);
      setTimeout(() => {
        setMsg(false);
      }, 3000);
      
      setEmail("");
    }
  };
  // const resendEmail = (response) => {};
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={4} lg={4}></Grid>
      <Grid item sm={12} md={8} lg={8}>
        <div className="adminlogin" style={{float:"left"}}>
          <h1>Forget Password</h1>
          {msg ? (
            <h3
              style={{
                color: "green",
                fontWeight: "700",
                paddingBottom: "15px",
              }}
            >
              Pasword reset link send Successfully to Your Email
            </h3>
          ) : (
            <h3>Enter your email to get password reset link</h3>
          )}
          <input
            id="emailinput"
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          {/* <div className="passwordfield" onClick={resendEmail}>
            Resend email
          </div> */}
          <div className="button" onClick={SendEmail}>
            Submit
          </div>
        </div>
      </Grid>
      {/* <Grid item sm={12} md={1} lg={1}></Grid> */}
    </Grid>
  );
};

export default ForgetPassword;
