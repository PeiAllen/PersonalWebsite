import React from "react"
import Navbar from "../../components/navbar"
import {BrowserRouter as Router} from "react-router-dom"

export default function Random() {
  return (
    <Router>
      <Navbar/>
      <p id="title">Random!</p>
      <p>import random</p>
      <p>print("Here is a random number from 1 to 100:",random.randint(1,100))</p>
    </Router>
  )
}
