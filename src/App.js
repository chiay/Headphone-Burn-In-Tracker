import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import HeadphoneList from "./components/HeadphoneList";
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <HeadphoneList />
      </div>
    </BrowserRouter>
  );
}

export default App;
