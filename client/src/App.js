import React from "react"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// component import
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route 
            path="/checkout" 
            element={
              <>
                <Header />
                <Checkout />
              </>
            } 
          />
          <Route path="/login" element={<h1> Login </h1>} />
          <Route 
            path="/" 
            element={
              <>
                <Header />
                <Home />
              </>
            } 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
