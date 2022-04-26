import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar";
import Mounting from "./Components/Mounting";
import Update from "./Components/Update";
import Unmount from "./Components/Unmount";
import Creat from "./Components/Creat";


function App() {
  return (<BrowserRouter>
   <Navbar/>
   <Routes> 
     
     <Route path="/" element={<Creat/>} />
     <Route path="/update" element={<Update/>} />
     <Route path="/unmount" element={<Unmount/>} />
     <Route path="/mounting" element={< Mounting/>} />
   </Routes>
   </BrowserRouter>
  
  );
}

export default App;
