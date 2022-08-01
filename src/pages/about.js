import React from "react"
import Navbar from "../components/navbar"

export default function About() {
  return(
    <div>
      <Navbar location={"About"}/>
      <div>
        <h1 style={{talign:'center'}}>Hi, I'm Allen Pei.</h1>
        <body>Hi, I'm an avid Competitive Programmer and Mathematician with an interest in spreading to other branches of computer science. I work with passion and I hope to meet many new people and make many new friends.</body>
      </div>
    </div>
  );
}