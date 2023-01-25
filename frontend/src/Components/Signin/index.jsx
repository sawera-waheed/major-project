import React from "react";
import { Grid } from "@mui/material";
import "./style.css";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const navigate = useNavigate();
  const handleClick =()=>{
   navigate("/nodemailer");
  }
  return (
  
      <Grid container spacing={2}>
        <Grid item sm={12} md={4} lg={4}></Grid>
        <Grid item sm={12} md={8} lg={8}>
          <div className="adminlogin">
            <h1>Sign In</h1>
            <h3>Your Social Compaigns</h3>
            <div className="link-buttons">
              <div className="google-button">
                <a href="#" className="fa fa-google"></a>Sign in with Google
              </div>
              <div className="facebook-button">
                <a href="#" class="fa fa-facebook"></a>Sign in with Facebook
              </div>
            </div>
            <input
              id="emailinput"
              type="text"
              placeholder="Email"
              name="email"
            />
            <input
              id="passwordinput"
              type="password"
              name="password"
              placeholder="Password"
            ></input>
            <p className="passwordfield">Forgot Password?</p>
            <div className="button">Sign In</div>
            <p className="signup-para">
              Not a Member yet? <span onClick={handleClick}>Sign up</span>
            </p>
          </div>
        </Grid>
        {/* <Grid item sm={12} md={1} lg={1}></Grid> */}
      </Grid>

  );
};

export default Signin;
