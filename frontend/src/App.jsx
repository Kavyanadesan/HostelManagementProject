import React from "react";
import Contact from "./components/Contact";
import Home from "./home/Home";
import Signup from "./components/Signup";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Home />
      <Contact /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
