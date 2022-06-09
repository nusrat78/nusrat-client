import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import ContactMe from './Pages/ContactMe/ContactMe';

import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import ProjectDetails from './Pages/Home/ProjectDetails';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<ContactMe></ContactMe>}></Route>
        <Route path='/projects/:projectId' element={<ProjectDetails></ProjectDetails>}>

        </Route>
      </Routes>

    </div>
  );
}

export default App;
