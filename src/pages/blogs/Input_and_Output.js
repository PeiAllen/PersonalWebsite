import React from "react"
import Navbar from "../../components/navbar"

export default function Input_and_Output() {
  return (
    <div>
      <Navbar/>
      <p id="title">Input and Output</p>
      <p>given=input("What is your age?")</p>
      <p>print("You are",given-10,"years older than me!")</p>
    </div>
  )
}
