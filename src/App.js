import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
