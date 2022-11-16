import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProject from "./Pages/SingleProject/SingleProject";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<SingleProject />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
