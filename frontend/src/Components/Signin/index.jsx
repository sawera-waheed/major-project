import React from "react";
import { Grid } from "@mui/material";
// import { GoogleLogin} from "react-google-login";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { Google } from "./style";
const Signin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
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
    console.log("working");
    const { email, password } = user;
    const res = await fetch("signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    // console.log(data);
    if (res.status === 422) {
      console.log("working fine");
      window.alert("All Fields Required");
    } else if (res.status === 401) {
      window.alert("Invalid credentials");
    } else if (res.status === 200) {
      window.alert("Login Successfully");
     
      localStorage.setItem("usersdatatoken",data.result.token);
      // localStorage.setItem("userLocalStorage", res.result.token)
      
      navigate("/home");
    }
  };
  const forgotPassword= (response) => {
    // console.log(response);
  };
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={4} lg={4}></Grid>
      <Grid item sm={12} md={8} lg={8}>
        <div className="adminlogin">
          <h1>Sign In</h1>
          <h3>Your Social Compaigns</h3>
          <div className="link-buttons">
            <div className="google-button">
              {/* <GoogleLogin
                clientId="607166920595-1g547lleaedk0k9oei3it9augp8hlc8e.apps.googleusercontent.com"
                buttonText="Login with google"
                onSuccess={responseSuccessGoogle}
                onFailure={responseErrorGoogle}
                cookiePolicy={"single_host_origin"}
              /> */}
              <a href="#" className="fa fa-google"></a>Sign in with Google
            </div>
            <div className="facebook-button">
              <a href="#" className="fa fa-facebook"></a>Sign in with Facebook
            </div>
          </div>
          <input
            id="emailinput"
            type="text"
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
          <div className="passwordfield" onClick={forgotPassword}>
           Forgot Password?
          </div>
          <div className="button" onClick={postData}>
            Sign In
          </div>
          <p className="signup-para">
            Not a Member yet? <a href="/signup">Sign up</a>
          </p>
        </div>
      </Grid>
      {/* <Grid item sm={12} md={1} lg={1}></Grid> */}
    </Grid>
  );
};

export default Signin;
