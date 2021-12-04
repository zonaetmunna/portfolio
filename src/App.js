import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home/Home';
import SingleProject from './Components/Pages/Home/SingleProject/SingleProject';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/project/:id" element={<SingleProject></SingleProject>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
