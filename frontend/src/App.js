import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./view/Error/Error";
import ForgetPass from "./view/ForgetPass/ForgetPass";
import Home from "./view/Home";
import Login from "./view/Login/index";
import NodeMailer from "./view/Nodemailer";
import ResetPass from "./view/ResetPass/ResetPass";
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
          <Route exact path="/forget" element={<ForgetPass/>}></Route>
          <Route exact path="/resetpassword/:id/:token" element={<ResetPass/>}></Route>
          <Route exact path="/*" element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Auth /> */}
    </>
  );
}

export default App;
