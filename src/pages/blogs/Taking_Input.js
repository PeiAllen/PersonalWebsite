import React from "react"
import Navbar from "../../components/navbar"
import {BrowserRouter as Router} from "react-router-dom"

export default function Taking_Input() {
  return (
    <Router>
      <Navbar/>
      <p id="title">Taking Input</p>
      <p>given=input("What is your name?")</p>
    </Router>
  )
}
