import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./view/Home";

import Login from "./view/Login/index";
import NodeMailer from "./view/Nodemailer";
import Signup from "./view/SignUp/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route excat path="/" element={<Login />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/nodemailer" element={<NodeMailer/>}></Route>
          <Route exact path="/signup" element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Auth /> */}
    </>
  );
}

export default App;
