import React from "react"
import Navbar from "../components/navbar"
import {BrowserRouter as Router} from "react-router-dom"

export default function About() {
  return(
    <Router>
      <Navbar/>
      <div>
        <h1 style={{talign:'center'}}>Hi, I'm Allen Pei.</h1>
        <body>Hi, I'm an avid Competitive Programmer and Mathematician with an interest in spreading to other branches of computer science. I work with passion and I hope to meet many new people and make many new friends.</body>
      </div>
    </Router>
  );
}