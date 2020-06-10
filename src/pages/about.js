import React from "react"
import Navbar from "../components/navbar"
import {BrowserRouter as Router} from "react-router-dom"

export default function About() {
  return(
    <Router>
      <Navbar/>
      <div>
        <h1 style={{talign:'center'}}>Hi, I'm Allen Pei.</h1>
        <body>lorum ipsum lmfao</body>
      </div>
    </Router>
  );
}