import React from "react"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// component import
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<h1> Checkout </h1>} />
          <Route path="/login" element={<h1> Login </h1>} />
          <Route path="/" element={<><Header /><h1> Homepage </h1></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
