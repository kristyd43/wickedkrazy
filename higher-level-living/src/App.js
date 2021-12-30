import React from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import ContactPage from "./pages/ContactPage";


function App() {

  return (

    <Router>
      <NavBar />
      <Routes>
      <Route path="/home" element={<HomePage/>} />
      <Route path="/contact" element={<ContactPage/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;