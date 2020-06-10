import React from "react"
import style from "../styles/index.css"
import Navbar from "../components/navbar"
import {BrowserRouter as Router} from "react-router-dom"

export default function Home() {
  return (
    <Router>
      <Navbar/>
      <p id="title">Hey, I'm Allen</p>
    </Router>
  )
}
