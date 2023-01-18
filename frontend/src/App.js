import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./view/Home";
import NodeMailer from "./view/Nodemailer";
function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/" element={<NodeMailer />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
