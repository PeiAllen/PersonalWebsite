import React from "react"
import Navbar from "../../components/navbar"
import {BrowserRouter as Router} from "react-router-dom"

export default function Hello_World() {
  return (
    <Router>
      <Navbar/>
      <p id="title">Hello, World!</p>
      <p>print("Hello, World")</p>
    </Router>
  )
}
