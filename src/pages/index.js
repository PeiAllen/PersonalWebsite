import React from "react"
import style from "../styles/index.module.css"
import Navbar from "../components/navbar"

export default function Home() {
  return (
    <div>
      <Navbar location={"Home"}/>
      <p className={style.title}>Hey, I'm Allen</p>
      <div>try out https://www.gatsbyjs.com/plugins/gatsby-image/?= when doing images</div>
    </div>
  )
}
