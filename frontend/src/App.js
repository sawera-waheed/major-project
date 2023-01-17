import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./view/Home";
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path ="/" element={<Home/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
