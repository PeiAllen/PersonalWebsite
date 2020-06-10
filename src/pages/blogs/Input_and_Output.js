import React from "react"
import Navbar from "../../components/navbar"
import {BrowserRouter as Router} from "react-router-dom"

export default function Input_and_Output() {
  return (
    <Router>
      <Navbar/>
      <p id="title">Input and Output</p>
      <p>given=input("What is your age?")</p>
      <p>print("You are",given-10,"years older than me!")</p>
    </Router>
  )
}
