import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import "./style.css";
const NodeMailer = () => {
  const [sender, setSender] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSender({
      ...sender,
      [name]: value,
    });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = sender;
    const res = await fetch("/sendmail", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });
    const data = await res.json();
console.log(data);
    if (res.status === 200) {
      console.log("setting sender");
      setSender({
        name: "",
        subject: "",
        email: "",
        message: "",
      });
      window.alert("Email Sent Successfully");
    } else {
      window.alert("Please fill all the fields");
    }
  };
  return (<>
  <Navbar/>
    <div className="container">
      <h1 className="brand">Contact Form Design</h1>
      <div className="wrapper animated bounceInLeft">
        <div className="company-info">
          <h3>Contact Form</h3>
          <ul>
            <li>
              <i className="fa fa-road" /> 44 Something st
            </li>
            <li>
              <i className="fa fa-phone" /> (555) 555-5555
            </li>
            <li>
              <i className="fa fa-envelope" />
              abc@gmail.com
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Email Us</h3>
          <form>
            <p>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={sender.name}
                onChange={handleChange}
              />
            </p>
            <p>
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={sender.email}
                onChange={handleChange}
              />
            </p>
            <p>
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={sender.subject}
                onChange={handleChange}
              />
            </p>

            <p className="full">
              <label>Message</label>
              <textarea
                name="message"
                rows={5}
                value={sender.message}
                onChange={handleChange}
              />
            </p>
            <p className="full">
              <button onClick={postData}>
                {/* <button  onClick={(sender)=>postData(sender)}> */}
                Submit
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default NodeMailer;
