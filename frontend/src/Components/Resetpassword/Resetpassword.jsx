import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import "./Resetpassword.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Resetpassword = () => {
  const navigate = useNavigate();
  const { id, token } = useParams();
  const [data, setData] = useState(false);
  const [msg, setMsg] = useState(false);
  const [user, setUser] = useState({
    password: "",
    cpassword: "",
  });

  const validateUser = async () => {
    const res = await fetch(`/resetpassword/${id}/${token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.status === 401) {
      navigate("*");
    } else if (res.status === 200) {
      console.log("Vlaid User");
      setData(true);
    }
  };
  useEffect(() => {
    validateUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const changePassword = async (e) => {
    e.preventDefault();
    const { password, cpassword } = user;
    if (password != cpassword) {
      window.alert("Password and confirm password must match");
    } else if (password == "" || cpassword == "") {
      window.alert("Please Fill both ");
    } else {
      const res = await fetch(`/${id}/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
        }),
      });
      const data = await res.json();
      if (res.status === 200) {
        window.alert("Password Upgraded");

        setUser({
          password: "",
          cpassword: ""
        })
        navigate("/")
      } else if (res.status === 401) {
        window.alert("Link Expired Please request for link again");
      }
    }
  };

  const resendEmail = (response) => {};

  return (
    <>
      {data ? (
        <Grid container spacing={2}>
          <Grid item sm={12} md={4} lg={4}></Grid>
          <Grid item sm={12} md={8} lg={8}>
            <div className="adminlogin">
              <h1>Reset Password</h1>
              <h3>Enter new password</h3>
              <input
                id="passwordinput"
                type="password"
                placeholder="New Password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
              <input
                id="cpasswordinput"
                type="password"
                placeholder="Confirm Password"
                name="cpassword"
                value={user.cpassword}
                onChange={handleChange}
              />
              <div className="passwordfield" onClick={resendEmail}>
                Resend email
              </div>
              <div className="button" onClick={changePassword}>
                Submit
              </div>
            </div>
          </Grid>
          {/* <Grid item sm={12} md={1} lg={1}></Grid> */}
        </Grid>
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

export default Resetpassword;
